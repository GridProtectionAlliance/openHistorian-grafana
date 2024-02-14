import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './datasource';
import { ConfigEditor } from './components/ConfigEditor';
import { QueryEditor } from './components/QueryEditor';
import { openHistorianQuery, openHistorianDataSourceOptions } from './types';
import { VariableQueryEditor } from 'components/VariableQueryEditor';


export const plugin = new DataSourcePlugin<DataSource, openHistorianQuery, openHistorianDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor)
  .setVariableQueryEditor(VariableQueryEditor)
  ;
