import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from "@grafana/data";
import { MyQuery, MyDataSourceOptions, QueryRequest, Target, FunctionQuery, ParsedQuery, MyVariableQuery, QueryBase, MetaDataSelection, QueryResponse, DataSourceValueType } from "./types";
import { getBackendSrv, getTemplateSrv } from "@grafana/runtime";
import _ from "lodash";
import { DefaultFlags } from "./js/constants";
import { AnnotationEditor } from "./components/AnnotationEditor";


export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  url: string;
  flags: {
    [key: string]: boolean;
  };
  dataSourceValueType: number;

  constructor(
    instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>
  ) {
    super(instanceSettings);

    this.annotations = {
        QueryEditor: AnnotationEditor
    }
    this.url = instanceSettings.jsonData.http.url || "";
    this.flags = instanceSettings.jsonData.flags || {};
    this.dataSourceValueType = parseInt(instanceSettings.jsonData.valueType || "1",10);
  }

  // This builds the Variable Query
  async metricFindQuery(query: MyVariableQuery, options?: any) {
    // Retrieve DataQueryResponse based on query.
    if (query.tableName === undefined || query.fieldName === undefined) {return;}
    if (query.tableName.length === 0 || query.fieldName.length === 0) {return;}

    let data = await getBackendSrv().post(this.url + "/Search",{
      dataTypeIndex: 	this.dataSourceValueType, 
      expression: 	`SELECT DISTINCT ${query.fieldName} FROM ${query.tableName} ${query.condition?.length ?? 0 === 0? "" : `WHERE ${query.condition}`}`
    })

    console.log(data);
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
    const parameter = fx.Parameters.map((p) => {
      if (p.type.type.includes('IAsyncEnumerable')) {
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
    
    const targets: Target[] = options.targets.filter( t=> !(t.hide ?? false)).map((t) => {

      const mData: MetaDataSelection[] = [];
      if (t.metadataOptions !== undefined) {
        t.metadataOptions.forEach((m) => {
          if (mData.find(t => t.tableName === m.Table) !== undefined) {
            mData.find(t => t.tableName === m.Table)?.fieldNames.push(m.FieldName);
          }
          else {
            mData.push({tableName: m.Table, fieldNames: [m.FieldName]})
          }
        })
      }

      let qstring = getTemplateSrv().replace(this.targetToString(t), options.scopedVars);
      if (t.commandLevel?.DropEmpty ?? false) {
        qstring = qstring + "; dropEmptySeries";
      }
      if (t.commandLevel?.IncludePeaks ?? false) {
        qstring = qstring + "; includePeaks";
      }
      if (t.commandLevel?.FullResolution ?? false) {
        qstring = qstring + "; fullResolutionQuery";
      }
      if (t.commandLevel?.RadialDistribution ?? false) {
        qstring = qstring + `; radialDistribution={radius=${(t.commandLevel?.Radius ?? 1.5)}; zoom=${(t.commandLevel?.Zoom ?? 2)}}`;
      }

    return ({
      refID: t.refId,
      target: qstring,
      metadataSelections: mData,
    })});
  
    return {
      dataTypeIndex: this.dataSourceValueType, 
      range: {from: options.range.from.toISOString(), to: options.range.to.toISOString()},
      interval: options.interval,
      maxDataPoints: 1000,
      targets: targets,
      adhocFilters: [],
      excludedFlags: excludedFlags, 
      excludeNormalFlags: excludeNormalFlags 
    };
  }

  async getTags(): Promise<string[]> {
    const datasourceTypes: DataSourceValueType[] = await getBackendSrv().post(this.url + "/GetValueTypes", {});
    return datasourceTypes.find(d => d.index === this.dataSourceValueType)?.timeSeriesDefinition?.split(",") ?? []
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    const target = options.targets[0];

     
    //Generate query
    let query: QueryRequest = this.buildQueryParameters(options);

    // Get Data
    let pointsData: QueryResponse[] = await getBackendSrv().post(this.url + "/query",query);
    console.log(pointsData)
    const tags = await this.getTags();
   
    console.log(tags);
    const transposeFrame = new MutableDataFrame({
      refId: target.refId,
      fields: tags.map((s,i) => ({
        name: s, 
        type: (i < (tags.length - 1)? FieldType.number : FieldType.time)
      })),
    });

    //Add MetaData Fields.
    const frames = pointsData.map((d) => {
      const metaData: string[] = Object.keys(d.metadata);
      
      if (options.targets.find(item => item.refId === d.refID)?.transpose ?? false) {
        const row: {[k: string]: any} = {};
        tags.forEach((t,i) =>{ row[t] = d.datapoints[0][i]});
        metaData.forEach((m) => {
          if (!transposeFrame.fields.map(f => f.name).includes(m)) {
            transposeFrame.addField({name: m, type: FieldType.other})
          }
           row[m] = d.metadata[m]; })
        transposeFrame.add(row);
        return undefined;
      }
      else {

      const frame = new MutableDataFrame({
        refId: target.refId,
        fields: metaData.concat(tags).map((s,i) => ({
          name: s, 
          type: (i < metaData.length? FieldType.other : (i < (metaData.length + tags.length - 1)? FieldType.number : FieldType.time))
        })),
      });

      frame.refId = d.refID;
      frame.name = d.target;

      d.datapoints.forEach((pt) => {
        console.log(pt);
        const row: {[k: string]: any} = {};
        tags.forEach((t,i) =>{ row[t] = pt[i]});
        metaData.forEach((m) => { row[m] = d.metadata[m] })
        frame.add(row);
      })

      return frame;
    }
    })
   
    if (options.targets.some(t => t.transpose)) {
      frames.push(transposeFrame);
    }

    return { data: frames.filter(f => f !== undefined) };
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

