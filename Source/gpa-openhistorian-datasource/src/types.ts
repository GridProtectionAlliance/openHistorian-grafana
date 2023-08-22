import { DataQuery, DataSourceJsonData, DataSourceSettings, TimeRange, RawTimeRange } from '@grafana/data';

// Query
export interface MyQuery extends DataQuery {
  elements: string[];
  queryType: string;
  queryText: string;
  metadataOptions: {
    [tableName: string]: string[]
  };
  functions: string[];
  functionsData: FunctionData;
}

export const DEFAULT_QUERY: Partial<MyQuery> = {
  elements: [],
  queryType: "Element List",
  queryText: "",
  metadataOptions: {},
  functions: [],
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
export interface FunctionParameter {
  Value: string;
  Type: string;
  Sub?: FunctionData;
}

export interface IFunction{
  [name: string]: {
    Description: string;
    Name: string;
    Parameters: {
      Default: any;
      Description: string;
      ParameterType: string;
      ParameterTypeName: string;
      Required: boolean;
    }[];
    Regex: {
      Pattern: string;
      Options: number;
    };
    Type: string;
  };
}

export interface FunctionData {
  Name: string;
  Parameters: FunctionParameter[];
}

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
  type: string;
  metadataSelection: {
    [tableName: string]: string[]
  }
  excludedFlags: number;
  excludeNormalFlags: boolean;
}

export interface AdHocFilter {
  key: string;
  operator: string;
  value: string;
}
