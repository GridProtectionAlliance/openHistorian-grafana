import {
  DataQueryRequest,
  DataQueryResponse,
  DataQueryError,
  DataSourceApi,
  DataSourceInstanceSettings,
  MutableDataFrame,
  FieldType,
} from "@grafana/data";
import {
  openHistorianQuery,
  openHistorianDataSourceOptions,
  QueryRequest,
  Target,
  FunctionQuery,
  ParsedQuery,
  MyVariableQuery,
  QueryBase,
  MetaDataSelection,
  QueryResponse
} from "./types";
import { getBackendSrv, getTemplateSrv } from "@grafana/runtime";
import _ from "lodash";
import { DefaultFlags } from "./js/constants";
import { AnnotationEditor } from "./components/AnnotationEditor";


export class DataSource extends DataSourceApi<openHistorianQuery, openHistorianDataSourceOptions> {
  url: string;
  flags: {
    [key: string]: boolean;
  };
  valueTypeIndex: number;
  valueTypeName: string;
  timeSeriesDefinitions: string[];
  metadataTableName: string;

  constructor(
    instanceSettings: DataSourceInstanceSettings<openHistorianDataSourceOptions>
  ) {
    super(instanceSettings);

    this.annotations = {
      QueryEditor: AnnotationEditor
    }
    this.url = instanceSettings.jsonData.http.url || "";
    this.flags = instanceSettings.jsonData.flags || {};
    this.valueTypeIndex = parseInt(instanceSettings.jsonData.valueTypeIndex || "0", 10);
    this.valueTypeName = instanceSettings.jsonData.valueTypeName || "";
    this.timeSeriesDefinitions = instanceSettings.jsonData.timeSeriesDefinitions ?? [''];
    this.metadataTableName = instanceSettings.jsonData.metadataTableName || "";
  }

  // This builds the Variable Query
  async metricFindQuery(query: MyVariableQuery, options?: any) {
    // Retrieve DataQueryResponse based on query.
    if (query.tableName === undefined || query.fieldNames === undefined) { return; }

    if (query.tableName.length === 0) {
      query.tableName = "ActiveMeasurements";

      if (query.fieldNames.length === 0 || query.fieldNames[0] === '*') {
        query.fieldNames = ["PointTag"];
      }
    }

    if (query.fieldNames.length === 0) {
      query.fieldNames = ["*"];
    }

    let data = await getBackendSrv().post(this.url + "/Search", {
      dataTypeIndex: -1 /* unrestricted search */,
      expression: `SELECT DISTINCT ${query.fieldNames} FROM ${query.tableName} ${query.condition?.length ?? 0 === 0 ? "" : ` WHERE ${query.condition}`}`
    })
    return data.map((s: string) => ({ text: s }));
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
    else if (target.queryType === "Text") {
      return target.queryText
    }
    else {
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
    return `${fx.Function}(${parameter})`;
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
      parts.push(query.Filters.map(f => `FILTER ${f.NumberMode === '' ? '' : `${f.NumberMode} ${f.Number}`} ${f.Table}${f.Condition?.length > 0 ? ` WHERE ${f.Condition}` : ''}`).join(";"))
    }
    if (query.Functions !== undefined) {
      parts.push(query.Functions.map(f => this.functionToString(f)).join(';'))
    }
    return parts.filter(s => s.length > 0).join(";");
  }

  buildQueryParameters(options: DataQueryRequest<openHistorianQuery>): QueryRequest {
    const excludedFlags = this.calculateFlags();
    const excludeNormalFlags = this.flags["Normal"] ?? false;

    const targets: Target[] = options.targets.filter(t => !(t.hide ?? false) && t.queryType !== 'Annotations').map((t) => {

      const metadataSelections: MetaDataSelection[] = [];

      if (t.metadataOptions !== undefined) {
        t.metadataOptions.forEach((m) => {
          if (metadataSelections.find(t => t.tableName === m.Table) !== undefined) {
            metadataSelections.find(t => t.tableName === m.Table)?.fieldNames.push(m.FieldName);
          }
          else {
            metadataSelections.push({ tableName: m.Table, fieldNames: [m.FieldName] })
          }
        })
      }

      let queryExpression = getTemplateSrv().replace(this.targetToString(t), options.scopedVars);

      if (t.commandLevel?.DropEmpty ?? false) {
        queryExpression = `${queryExpression}; dropEmptySeries`;
      }

      if (t.commandLevel?.IncludePeaks ?? false) {
        queryExpression = `${queryExpression}; includePeaks`;
      }

      if (t.commandLevel?.FullResolution ?? false) {
        queryExpression = `${queryExpression}; fullResolutionQuery`;
      }

      if (t.commandLevel?.RadialDistribution ?? false) {
        queryExpression = `${queryExpression}; radialDistribution={radius=${(t.commandLevel?.Radius ?? 1.5)}; zoom=${(t.commandLevel?.Zoom ?? 2)}}`;
      }

      return ({
        refID: t.refId,
        target: queryExpression,
        metadataSelections: metadataSelections,
      })
    });

    return {
      dataTypeIndex: this.valueTypeIndex,
      range: { from: options.range.from.toISOString(), to: options.range.to.toISOString() },
      interval: options.interval,
      targets: targets,
      adhocFilters: [],
      excludedFlags: excludedFlags,
      excludeNormalFlags: excludeNormalFlags,
      maxDataPoints: options.maxDataPoints ?? 1000
    };
  }

  async query(options: DataQueryRequest<openHistorianQuery>): Promise<DataQueryResponse> {
    const target = options.targets[0];

    const metaDataTypes = options.targets.map(i => i.metadataOptions).flat();

    const hasDataQuery = options.targets.some(t => t.queryType !== 'Annotations');
    const hasAnnotationQuery = options.targets.some(t => t.queryType === 'Annotations');;

    let data: Array<(MutableDataFrame<any> | undefined)> = [];
    let error: DataQueryError = {};
    let syntaxErrors: string[] = [];

    // Generate query
    if (hasDataQuery) {
      let query: QueryRequest = this.buildQueryParameters(options);

      // Get Data
      let pointsData: QueryResponse[] = await getBackendSrv().post(this.url + "/query", query);

      const tags = this.timeSeriesDefinitions;

      const transposeFrames = new Map<string,(MutableDataFrame<any>|undefined)>();

   

      // Add metadata fields
      const frames = pointsData.map((d) => {
        // Cumulate any reported syntax errors
        if (d.syntaxError) {
          syntaxErrors.push(d.syntaxError);
        }

        const metaData: string[] = Object.keys(d.metadata);

        if (options.targets.find(item => item.refId === d.refID)?.transpose ?? false) {
          const row: { [k: string]: any } = {};

          if (!transposeFrames.has(d.refID)) {
            transposeFrames.set(d.refID, new MutableDataFrame({
              refId: d.refID,
              name: d.refID,
              fields: tags.map((s, i) => ({
                name: s,
                type: (i < (tags.length - 1) ? FieldType.number : FieldType.time)
              })),
            }))
          }

          if (d.datapoints.length > 0) {
            tags.forEach((t, i) => { row[t] = d.datapoints[0][i] });
          }
          else {
            tags.forEach((t, i) => { row[t] = NaN });
          }
          metaData.forEach((m) => {
            if (!transposeFrames.get(d.refID)!.fields.map(f => f.name).includes(m)) {
              transposeFrames.get(d.refID)!.addField({ name: m, type: FieldType.other })
            }
            row[m] = d.metadata[m];
          })

          transposeFrames.get(d.refID)!.add(row);
          return undefined;
        }
        else {

          const frame = new MutableDataFrame({
            refId: target.refId,
            fields: metaData.concat(tags).map((s, i) => ({
              name: s,
              type: (i < metaData.length ? this.metaDataDataType(metaDataTypes.find(m => m.FieldName === metaData[i] || `${m.Table}.${m.FieldName}` === metaData[i])?.Type ?? "")
                : (i < (metaData.length + tags.length - 1)
                  ? FieldType.number : FieldType.time))
            })),
          });

          frame.refId = d.refID;
          frame.name = d.target;

          d.datapoints.forEach((pt) => {
            const row: { [k: string]: any } = {};
            tags.forEach((t, i) => { row[t] = pt[i] });
            metaData.forEach((m) => { row[m] = d.metadata[m] })
            frame.add(row);
          })

          return frame;
        }
      })
        data = frames.concat([...transposeFrames.values()]).filter(f => f !== undefined);
    }
    if (hasAnnotationQuery) {
      data.push(await this.queryAnnotations(options))
    }

    if (syntaxErrors.length > 0) {
      error = {
        message: syntaxErrors.join('\n\n')
      }
    }

    return { data, error };
  }

  async testDatasource() {
    return await getBackendSrv().get(this.url + "/")
      .then(() => ({
        status: "success",
        message: "Data source is working",
        title: "Success",
      }), () => ({
        status: "error",
        message: "Data source is not working",
        title: "Error",
      }))
  }

  metaDataDataType(type: string) {
    if (type === 'Int16') {
      return FieldType.number;
    }
    if (type === 'Int32') {
      return FieldType.number;
    }
    if (type === 'Int64') {
      return FieldType.number;
    }
    if (type === 'UInt16') {
      return FieldType.number;
    }
    if (type === 'UInt32') {
      return FieldType.number;
    }
    if (type === 'UInt64') {
      return FieldType.number;
    }
    if (type === 'IntPtr') {
      return FieldType.number;
    }
    if (type === 'UIntPtr') {
      return FieldType.number;
    }
    if (type === 'Boolean') {
      return FieldType.boolean;
    }
    if (type === 'Byte') {
      return FieldType.number;
    }
    if (type === 'SByte') {
      return FieldType.number;
    }
    if (type === 'Char') {
      return FieldType.number;
    }
    if (type === 'Decimal') {
      return FieldType.number;
    }
    if (type === 'Double') {
      return FieldType.number;
    }
    if (type === 'Single') {
      return FieldType.number;
    }
    if (type === 'String') {
      return FieldType.string;
    }
    if (type === 'Guid') {
      return FieldType.string;
    }

    return FieldType.other;

  }
  async queryAnnotations(options: DataQueryRequest<openHistorianQuery>): Promise<MutableDataFrame<any>> {

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
      refId: options.targets[0].refId,
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
    return frame;
  }
}

