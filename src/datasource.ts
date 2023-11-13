import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from "@grafana/data";

import { MyQuery, MyDataSourceOptions, QueryRequest, Target, FunctionQuery, ParsedQuery, MyVariableQuery, QueryBase } from "./types";
import { getBackendSrv, getTemplateSrv } from "@grafana/runtime";
import _ from "lodash";
import { DefaultFlags } from "./js/constants";
import { AnnotationEditor } from "./components/AnnotationEditor";


export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  url: string;
  flags: {
    [key: string]: boolean;
  };
  isPhasor: boolean;

  constructor(
    instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>
  ) {
    super(instanceSettings);

    this.annotations = {
        QueryEditor: AnnotationEditor
    }
    this.url = instanceSettings.jsonData.http.url || "";
    this.flags = instanceSettings.jsonData.flags || {};
    this.isPhasor = instanceSettings.jsonData.phasor || false;
  }

  async metricFindQuery(query: MyVariableQuery, options?: any) {
    // Retrieve DataQueryResponse based on query.
    const postQuery = this.buildVariableQueryParameters(query);
    // Get Data
    let data = await getBackendSrv().post(this.url + "/getmetadata",postQuery)
    if (data.length === 0) {
      data = [];
    }

    data = JSON.parse(data) as string[];

    return data.map((s: string) => ({text: s}));
  }
  
  //Generate value of excluded flags
  calculateFlags() {
    let excludedValue = 0;

    for (const [key, value] of Object.entries(this.flags)) {
      if (key !== "Select All" && key !== "Normal" && value === true) {
        excludedValue ^= DefaultFlags[key as keyof typeof DefaultFlags].Flag;
      }
    }

    return excludedValue;
  }

  targetToString(target: QueryBase) {
    if (target === undefined) {
      return "";
    }

    if (target.queryType === "Elements" || target.queryType === undefined) {
      return this.parsedQueryToString(target.parsedQuery)
    }
    else if(target.queryType === "Text"){
      return target.queryText
    }
    else{
      return ""
    }
  }

  functionToString(fx: FunctionQuery) {
    const parameter =fx.Parameters.map((p) => {
      if (p.type.ParameterTypeName === 'IDataSourceValueGroup') {
        return this.parsedQueryToString(p.value as ParsedQuery)
      }
      return p.value.toString()
    }).join(',')
    return  `${fx.Function}(${parameter})`;
  }

  parsedQueryToString(query: ParsedQuery) {
    if (query === undefined) {
      return "";
    }
    const parts: string[] = [];
    if (query.Elements !== undefined) {
      parts.push(query.Elements.join(";"));
    }
    if (query.Filters !== undefined) {
      parts.push(query.Filters.map(f => `Filter ${f.NumberMode === '' ? '' : `${f.NumberMode} ${f.Number}`} ${f.Table} WHERE ${f.Condition}`).join(";"))
    }
    if (query.Functions !== undefined) {
      parts.push(query.Functions.map(f => this.functionToString(f)).join(';'))
    }
    return parts.filter(s => s.length > 0).join(";");
  }

  buildQueryParameters(options: DataQueryRequest<MyQuery>): QueryRequest {
    const excludedFlags = this.calculateFlags();
    const excludeNormalFlags = this.flags["Normal"] ?? false;
    
    const targets: Target[] = options.targets.map((t) => {
      const mData: {[tableName: string]: string[]} = {};
      if (t.metadataOptions !== undefined) {
        t.metadataOptions.forEach((m) => {
          if (mData[m.Table] !== undefined) {
            mData[m.Table].push(m.Name);
          }
          else {
            mData[m.Table] = [m.Name]
          }
        })
      }

      return ({
      refId: t.refId,
      target: getTemplateSrv().replace(this.targetToString(t), options.scopedVars) ,
      metadataSelection: mData,
      excludedFlags: excludedFlags,
      excludeNormalFlags: excludeNormalFlags,
      isPhasor: this.isPhasor,
    })});
  
    return {
      panelId: options.panelId ??  0,
      dashboardId: options.dashboardId ?? 0,
      range: options.range!,
      rangeRaw: options.rangeRaw!,
      interval: options.interval ?? "",
      intervalMs: options.intervalMs ?? 0,
      format: "json",
      maxDataPoints: options.maxDataPoints ?? 0,
      targets: targets,
      adhocFilters: [], 
      isPhasor: this.isPhasor,
    };
  }

  buildVariableQueryParameters(query: MyVariableQuery) {
    const excludedFlags = this.calculateFlags();
    const excludeNormalFlags = this.flags["Normal"] ?? false;

    let target = "";
    if (query.queryType !== undefined && query.queryType !== 'All') {
      target = this.targetToString(query);
    }

    const mData: {[tableName: string]: string[]} = {};
    mData[query.field.Table] = [query.field.Name];
 
    return ({
      refId: query.refId ?? "A",
      target: target,
      metadataSelection: mData,
      excludedFlags: excludedFlags,
      excludeNormalFlags: excludeNormalFlags,
      isPhasor: this.isPhasor,
    });    
    }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range!.from.valueOf();
    const to = range!.to.valueOf();

    const target = options.targets[0];

    const blankQuery = {
      data: [
        new MutableDataFrame({
          refId: target.refId,
          fields: [
            { name: "Time", values: [from, to], type: FieldType.time },
          ],
        }),
      ],
    };

    if (target.queryType === 'Elements' && !target.parsedQuery) {
      return blankQuery
    }
    if (target.queryType === 'Text' && !target.queryText) {
      return blankQuery
    }

    if (target.queryType === 'Annotations') {
      return await this.queryAnnotations(options);
    }

    //Generate query
    let query: QueryRequest = this.buildQueryParameters(options);

    // Get Data
    let pointsData = await getBackendSrv().post(this.url + "/query",query)

    // Declare frames
    const frame = new MutableDataFrame({
      refId: target.refId,
      fields: [{ name: "Time", type: FieldType.time}],
    });

    if ((target.transpose ?? false)) {
      frame.addField({ name: 'name', type: FieldType.string });
      if (!this.isPhasor) {
        frame.addField({ name: 'value', type: FieldType.number });
      } else {
        frame.addField({ name: 'magnitude', type: FieldType.number });
        frame.addField({ name: 'phase', type: FieldType.number });
      }
      if (target.metadataOptions !== undefined) {
        for (let fld of target.metadataOptions) {
          frame.addField({ name: fld.Name, type: FieldType.other});
        } 
      }

      for (const entry of pointsData) {
        const mObj: {[key: string]: [value: any]} = {};
        if (target.metadataOptions !== undefined) {
          for (let fld of target.metadataOptions) { 
            if (entry["meta"][fld.Name] !== undefined) {
              mObj[fld.Name] = entry["meta"][fld.Name]
            }
          }
        }
        if (!this.isPhasor) {
          let [val, timestamp] = [NaN,NaN];
          if (entry["datapoints"].length > 0) {
            [val, timestamp] = entry["datapoints"][0];
          }
          frame.add({...mObj,'value': val ,'Time': timestamp, 'name': entry["target"]})
        } else {
          let [mag, ang, timestamp] = [NaN, NaN, NaN];
          if (entry["datapoints"].length > 0) {
            [mag, ang, timestamp] = entry["datapoints"][0];
          }
          
          frame.add({...mObj, 'magnitude': mag, 'phase': ang ,'Time': timestamp, 'name': entry["target"].split(";")[0]})
        }

      }
    } else {
    //Add data & metadata fields 
    for (const entry of pointsData) {
      if(this.isPhasor){
        const targetNames: string[] = entry["target"].split(";")
        targetNames.map((targetName: string) => {
          frame.addField({ name: targetName, type: FieldType.number });
        })
      }
      else {
        frame.addField({ name: entry["target"], type: FieldType.number });
      }

      const meta = entry["meta"];
      for (const key in meta) {
        frame.addField({ name: key + "/" + entry["target"] });
      }    
    }

    // if Transpose mode we do not group Points by Timestamp but group by 
    // Intermediate object to group points by timestamp
    let groupedPoints: {
      [timestamp: number]: { [target: string]: number };
    } = groupPoints(pointsData, this.isPhasor);

    groupedPoints = addMetadata(groupedPoints, pointsData)

    // Iterate through grouped points and add them to the frame
    for (const timestamp in groupedPoints) {
      const data: { [key: string]: any } = { Time: parseInt(timestamp, 10) };
      Object.assign(data, groupedPoints[timestamp]);
      frame.add(data);
    }
  }

    return { data: [frame] };
  }

  async testDatasource() {
    return await getBackendSrv().get(this.url + "/")
      .then(() => ({
        status: "success",
        message: "Data source is working",
        title: "Success",
      }),() => ({
        status: "error",
        message: "Data source is not working",
        title: "Error",
      }))
  }

  async queryAnnotations(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {

      const queyText = options.targets
        .map((t) => getTemplateSrv().replace(t.queryText, options.scopedVars))
        .join(';');

      const annotationQuery = {
          range: options.range,
          annotationQuery: queyText,
          rangeRaw: options.rangeRaw
      };

      const data = await getBackendSrv().post(this.url + '/annotations', annotationQuery);
      if (data.length > 500) {
        throw Error(`There are ${data.length} annotations. Grafana can not display more than 500.`)
      }
      const frame = new MutableDataFrame({
        refId:  options.targets[0].refId,
        fields: [
          { name: "time", type: FieldType.time },
          { name: "timeEnd", type: FieldType.time },
          { name: "title", type: FieldType.string },
          { name: "text", type: FieldType.string },
          { name: "tags", type: FieldType.string },
        ],
      });
      data.forEach((a: any) => {
        frame.add(
          {
            "time": a["time"], 
            "timeEnd": a["endTime"],
            "title": a["title"],
            "text": a["text"], 
            "tags": a["tags"]
          })
      })
     
      return  { data: [frame] };
  }
}

//Groups data by time
function groupPoints(pointsData: any[] , isPhasor: boolean) {
  const groupedPoints: { [timestamp: number]: { [target: string]: number } } =
    {};

  //Iterate through each entry
  for (const entry of pointsData) {
    for (const points of entry["datapoints"]) {
      if(isPhasor){
        const [mag, ang, timestamp] = points;

        //Check if timestamp already exists in groupedPoints
        if (timestamp in groupedPoints) {
          groupedPoints[timestamp][entry["target"].split(";")[0]] = mag;
          groupedPoints[timestamp][entry["target"].split(";")[1]] = ang;
        } else {
          groupedPoints[timestamp] = 
            { [entry["target"].split(";")[0]]: mag, [entry["target"].split(";")[1]]: ang, };
        }
      }else {
        const [val, timestamp] = points;

        //Check if timestamp already exists in groupedPoints
        if (timestamp in groupedPoints) {
          groupedPoints[timestamp][entry["target"]] = val;
        } else {
          groupedPoints[timestamp] = { [entry["target"]]: val };
        }
      }
    }
  }
  return groupedPoints;
}

function addMetadata(groupedPoints: { [timestamp: number]: { [target: string]: number } }, pointsData: any[]) {
  // Add metadata to all timestamps
  for (const timestamp in groupedPoints) {
    for(const entry of pointsData){
      const meta = entry["meta"];
      for (const key in meta) {
        groupedPoints[timestamp][key + "/" + entry["target"]] = meta[key]
      }
    }
  }

  return groupedPoints
}

