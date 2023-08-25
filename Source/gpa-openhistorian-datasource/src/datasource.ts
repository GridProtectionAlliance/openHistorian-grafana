import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from "@grafana/data";

import { MyQuery, MyDataSourceOptions, MetadataTarget, QueryRequest, Target, FunctionData, IFunction } from "./types";
import { getBackendSrv } from "@grafana/runtime";
import _ from "lodash";
import { DefaultFlags } from "./js/constants";


export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  url: string;
  flags: {
    [key: string]: boolean;
  };
  isPhasor: boolean;

  loading = true;

  // Holder variables
  elementsList: string[] = [];
  tablesList: string[] = [];
  metadataList: {
    [tableName: string]: string[]
  } = {}
  functionList: IFunction = {}

  constructor(
    instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>
  ) {
    super(instanceSettings);

    this.url = instanceSettings.jsonData.http.url || "";
    this.flags = instanceSettings.jsonData.flags || {};
    this.isPhasor = instanceSettings.jsonData.phasor || false;

    Promise.all([
      this.searchQuery(),
      this.tableOptionsQuery()
        .then(tablesRes => {
          this.tablesList = tablesRes.data || [];
          return this.metadataOptionsQuery(this.tablesList);
        }),
      this.functionOptionsQuery(),
    ])
    .then(([searchRes, metadataRes, functionRes]) => {  
      // Elements List
      this.elementsList = searchRes.data || [];
      this.elementsList.sort();
  
      // Metadata List
      this.metadataList = metadataRes.data || {};
  
      // Function List
      Object.entries(functionRes.data).forEach(([key, value]: [string, any]) => {
        const name: string = value.Name;
        this.functionList[name] = value;
      });
  
      // All promises are resolved, set loading to false
      this.loading = false;
    })
    .catch(error => {
      console.error("An error occurred in fetching data:", error);
      this.loading = false;
    });
  }

  //List of all elements
  async searchQuery() {
    return await getBackendSrv().datasourceRequest({
      url: this.url + "/search",
      method: "POST",
      data: { 
        target: "",
        isPhasor: this.isPhasor,
      },
    });
  }

  //Information on specific elements
  async dataQuery(query: QueryRequest, requestID: string) {
    return await getBackendSrv().datasourceRequest({
      url: this.url + "/query",
      data: query,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      requestId: requestID
    });
  }

  //Fetches valid tables 
  async tableOptionsQuery() {
    return await getBackendSrv().datasourceRequest({
      url: this.url + "/gettableoptions",
      data: { IsPhasor: this.isPhasor },
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  }

  //Fetches a list of all metadata options from selected tables
  async metadataOptionsQuery(tables: string[]){
    return await getBackendSrv().datasourceRequest({
      url: this.url + "/getmetadataoptions",
      data: { tables },
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  }

  //Fetches a list of all metadata options from selected tables
  async functionOptionsQuery(){
    return await getBackendSrv().datasourceRequest({
      url: this.url + "/getfunctions",
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
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

  generateExpressionFromFunction(functionsData: FunctionData): string{
    if(functionsData.Name === ""){
      return ""
    }

    let expression = functionsData.Name + "(";
    functionsData.Parameters.map((parameter, index) => {
      // No nested function
      if(parameter.Sub === undefined){
        expression += parameter.Value;
      }

      // Nested Function
      else {
        expression += this.generateExpressionFromFunction(parameter.Sub)
      }

      // Add "," if not last element
      if (index < functionsData.Parameters.length - 1) {
        expression += ",";
      }
    })
    expression += ")"
    return expression 
  }

  targetToString(target: MyQuery) {
    if (target === undefined || target.elements === undefined) {
      return "";
    }

    if (!target.queryType || target.queryType === "Element List") {
      return target.elements.join(";") 
    }
    else if (target.queryType === "Functions"){
      let a = this.generateExpressionFromFunction(target.functionsData)
      return a;
    }
    else if(target.queryType === "Text Editor"){
      return target.queryText
    }

    else{
      return ""
    }
  }

  targetToList(target: MyQuery) {
    if (target === undefined || target.elements === undefined) {
      return [];
    }
  
    if (!target.queryType || target.queryType === "Element List") {
      return target.elements;
    } else if (target.queryType === "Text Editor" && target.queryText) {
      return this.expressionToElements(target.queryText)
    } else {
      return [];
    }
  }

  expressionToElements(input: string) {
    // Find the last opening parenthesis
    const start = input.lastIndexOf("(");
    const end = input.indexOf(")", start);
    let targetElements = input;

    // Take text inside ()
    if (start !== -1 && end !== -1) {
      targetElements = input.slice(start + 1, end);
    }

    // Seperate expression from query
    const splitTargetElements = targetElements.split(",");
    const lastElement = splitTargetElements[splitTargetElements.length - 1].trim();

    // Seperate elements
    return lastElement.split(";");
  }
  

  buildQueryParameters(options: DataQueryRequest<MyQuery>): QueryRequest {
    const excludedFlags = this.calculateFlags();
    const excludeNormalFlags = this.flags["Normal"] ?? false;
  
    const targets: Target[] = options.targets.map((target) => ({
      refId: target.refId,
      target: this.targetToString(target),
      type: target.queryType ?? "Element List",
      metadataSelection: target.metadataOptions,
      excludedFlags: excludedFlags,
      excludeNormalFlags: excludeNormalFlags,
    }));
  
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

  buildMetadataParameters(
    options: DataQueryRequest<MyQuery>
  ): MetadataTarget[] {

    const targets: MetadataTarget[] = [];

    for (const target of options.targets) {
      const tables: string[] = Object.keys(target.metadataOptions || {});
      
      const elements = this.targetToList(target)
      if (!elements) {
        continue;
      }

      for (const element of elements) {
        targets.push({
          target: element,
          tables: tables,
        });
      }
    }

    return targets;
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

    if (!target.elements) {
      return blankQuery
    }

    //Generate query
    let query: QueryRequest = this.buildQueryParameters(options);

    // Get Data
    let pointsData = await this.dataQuery(query, options.requestId); 

    // Declare frames
    const frame = new MutableDataFrame({
      refId: target.refId,
      fields: [{ name: "Time", type: FieldType.time }],
    });

    //Add data & metadata fields 
    for (const entry of pointsData["data"]) {
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


    return { data: [frame] };
  }

  async testDatasource() {
    return await getBackendSrv()
      .datasourceRequest({
        url: this.url + "/",
        method: "GET",
      })
      .then(function (response) {
        if (response.status === 200) {
          return {
            status: "success",
            message: "Data source is working",
            title: "Success",
          };
        } else {
          return {
            status: "error",
            message: "Data source is not working",
            title: "Error",
          };
        }
      });
  }
}

//Groups data by time
function groupPoints(pointsData: { [key: string]: any }, isPhasor: boolean) {
  const groupedPoints: { [timestamp: number]: { [target: string]: number } } =
    {};

  //Iterate through each entry
  for (const entry of pointsData["data"]) {
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

function addMetadata(groupedPoints: { [timestamp: number]: { [target: string]: number } }, pointsData: { [key: string]: any }) {
  // Add metadata to all timestamps
  for (const timestamp in groupedPoints) {
    for(const entry of pointsData["data"]){
      const meta = entry["meta"];
      for (const key in meta) {
        groupedPoints[timestamp][key + "/" + entry["target"]] = meta[key]
      }
    }
  }

  return groupedPoints
}
