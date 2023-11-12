import { DataQuery, DataSourceJsonData, DataSourceSettings, TimeRange, RawTimeRange } from '@grafana/data';

// Query
export interface QueryBase extends DataQuery{
  queryType: QueryTypes|VariableQueryTypes;
  queryText: string;
  parsedQuery: ParsedQuery,
}

export interface MyQuery extends QueryBase {
  metadataOptions: IMetaDataField[];
  transpose: boolean
}

export type QueryTypes = 'Elements'|'Text'|'Annotations';
export type VariableQueryTypes = QueryTypes|'All';

export const DEFAULT_QUERY: Partial<MyQuery> = {
  queryType: "Elements",
  queryText: "",
  metadataOptions: [{Table: 'ActiveMeasurements', Name: 'PointTag'}],
  parsedQuery: { Elements: [], Functions: [], Filters: []}
};
// Config
export interface MyDataSourceOptions extends DataSourceJsonData {
  http: DataSourceSettings<any, any>;
  flags: {
    [key: string]: boolean;
  };
  phasor: boolean
}


/* Custom Interfaces below */
export interface IFunctionParameter {
  Description: string;
  Required: boolean;
  ParameterTypeName: string
}

export interface IFunction{
    Description: string;
    Name: string;
    Parameters: IFunctionParameter[]
};

export interface IMetaDataField {
  Table: string,
  Name: string,
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
  NumberMode: ''|'Top'
}

export interface FunctionQuery {
  Function: string,
  Parameters: ParameterType[],
}


export type ParameterType = {
  type: IFunctionParameter,
  value: string|number|boolean|ParsedQuery
};

export interface MetadataTarget {
  target: string;
  tables: string[];
}


export interface QueryRequest {
  panelId: number;
  dashboardId: number;
  range: TimeRange;
  rangeRaw: RawTimeRange;
  interval: string;
  intervalMs: number;
  format: string;
  maxDataPoints: number;
  targets: Target[];
  adhocFilters: AdHocFilter[];
  isPhasor: boolean;
}

export interface Target {
  refId: string;
  target: string;
  metadataSelection: {
    [tableName: string]: string[]
  }
  excludedFlags: number;
  excludeNormalFlags: boolean;
  isPhasor: boolean;
}

export interface AdHocFilter {
  key: string;
  operator: string;
  value: string;
}

export interface MyVariableQuery extends QueryBase {
  field: IMetaDataField;
}
