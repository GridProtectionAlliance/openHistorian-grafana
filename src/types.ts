import { DataSourceJsonData } from '@grafana/data';
import { DataQuery } from "@grafana/schema";

// Query
export interface QueryBase extends DataQuery {
  queryType: QueryTypes;
  queryText: string;
  parsedQuery: ParsedQuery
}

export interface OpenHistorianQuery extends QueryBase {
  metadataOptions: MetaDataField[];
  transpose: boolean,
  commandLevel?: CommandLevelFlags
}

export type QueryTypes = 'Elements' | 'Text' | 'Annotations';

export const DEFAULT_QUERY: Partial<OpenHistorianQuery> = {
  queryType: "Elements",
  queryText: "",
  metadataOptions: [{ Table: 'ActiveMeasurements', FieldName: 'PointTag', Type: 'String' }],
  parsedQuery: { Elements: [], Functions: [], Filters: [] }
};

// Config
export interface OpenHistorianDataSourceOptions extends DataSourceJsonData {
  flags: {
    [key: string]: boolean;
  };
  valueTypeIndex: string;
  valueTypeName: string;
  timeSeriesDefinitions: string[];
  metadataTableName: string;
}

/* Custom Interfaces below */

export interface MetaDataField {
  Table: string,
  FieldName: string,
  Type: string,
}

export interface ParsedQuery {
  Elements: string[],
  Functions: FunctionQuery[],
  Filters: FilterQuery[],

}

export interface FilterQuery {
  Table: string,
  Condition: string,
  Number: number,
  NumberMode: '' | 'TOP'
}

export interface FunctionQuery {
  Function: string,
  Parameters: ParameterType[],
}

export type ParameterType = {
  type: ParameterDescription,
  value: string | number | boolean | ParsedQuery
};

export interface MetadataTarget {
  target: string;
  tables: string[];
}

interface Range {
  from: string,
  to: string
}

export interface QueryRequest {
  dataTypeIndex: number,
  range: Range,
  interval: string,
  maxDataPoints: number,
  targets: Target[],
  adhocFilters: AdHocFilter[],
  excludedFlags: number,
  excludeNormalFlags: boolean
}

export interface Target {
  refID: string;
  target: string;
  metadataSelections: MetaDataSelection[]
}

export interface MetaDataSelection {
  tableName: string,
  fieldNames: string[]
}
export interface AdHocFilter {
  key: string;
  operator: string;
  value: string;
}

export interface MyVariableQuery {
  fieldNames: string[];
  tableName: string,
  condition: string
}

export interface DataSourceValueType {
  name: string,
  index: number,
  timeSeriesDefinition: string
  metadataTableName: string
}

export interface CommandLevelFlags {
  DropEmpty: boolean;
  IncludePeaks: boolean,
  FullResolution: boolean,
  RadialDistribution: boolean,
  Radius?: number,
  Zoom?: number
}

export interface FieldDescription {
  name: string,
  type: string,
  required: boolean
}

export interface FunctionDescription {
  name: string,
  description: string,
  aliases: string[],
  returnType: string, // either 'Scalar' or 'Series'
  category: string,   // either 'BuiltIn' or 'Custom'
  allowedGroupOperations: string, // Comma separated list
  publishedGroupOperations: string, // Comma separated list
  parameters: ParameterDescription[]
};

export interface ParameterDescription {
  name: string,
  description: string,
  type: string,
  required: boolean,
  default: string
}

export interface QueryResponse {
  target: string,
  rootTarget: string,
  refID: string,
  syntaxError: string,
  metadata: any,
  datapoints: number[][]
}
