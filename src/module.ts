import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './datasource';
import { ConfigEditor } from './components/ConfigEditor';
import { QueryEditor } from './components/QueryEditor';
import { OpenHistorianQuery, OpenHistorianDataSourceOptions } from './types';
import { VariableQueryEditor } from './components/VariableQueryEditor';


export const plugin = new DataSourcePlugin<DataSource, OpenHistorianQuery, OpenHistorianDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor)
  .setVariableQueryEditor(VariableQueryEditor)
  ;
