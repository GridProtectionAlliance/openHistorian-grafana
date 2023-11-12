import React from 'react';
import {  InlineField, Select, Card, InlineSwitch } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery, QueryTypes} from '../types';
import { QuerySelectOptions } from '../js/constants'
import "../css/query-editor.css";
import { QueryEditorWizard } from './ElementQueryEditor';
import { MetaDataSelector } from './MetaDataFieldSelector';
import { TextQuery } from './TextQueryEditor';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, datasource }: Props) {

  const selectedMode = React.useMemo(() => (query.queryType ?? 'Elements'), [query])

  const modeChange = React.useCallback((selected: SelectableValue<string>) => { 
    onChange({...query, queryType: ((selected.value ?? 'Elements') as QueryTypes)})

  }, [query,onChange])

  return (
    <div className="gf-form" style={{ display: 'flex', flexDirection: 'column' }}>
        <>
        <Card>
          <Card.Heading>General Settings</Card.Heading>
          <Card.Description>
            <InlineField label="Mode" labelWidth={12}>
              <Select options={QuerySelectOptions} value={selectedMode} onChange={modeChange} allowCustomValue={false} />
            </InlineField>
            <InlineField label="Transpose Query" labelWidth={24}>
              <InlineSwitch value={query.transpose ?? false}
               onChange={(v) => onChange({...query, transpose: (v!.target as HTMLInputElement)!.value === 'on'})}
               label='used for displaying single value per channel on geo displays etc.'
               showLabel={true}
               />
            </InlineField>
          </Card.Description>  
        </Card>
        <Card>
          <Card.Heading>Meta Data</Card.Heading>
          <Card.Description> 
            <MetaDataSelector datasource={datasource} onChange={(flds) => onChange({...query, metadataOptions: flds})} query={query.metadataOptions}/>
          </Card.Description>  
        </Card>
        <Card>
          <Card.Heading>Data Selection</Card.Heading>
          <Card.Description> 
          {query.queryType === 'Text'? <TextQuery onChange={(t) => onChange({...query, queryText: t})} query={query.queryText}/> : null}
          {query.queryType === 'Elements' || query.queryType === undefined? <QueryEditorWizard 
              onChange={(q) => onChange({...query, queryText: q.queryText, parsedQuery: q.parsedQuery})} query={query}
              datasource={datasource}/> : null}
           </Card.Description>  
        </Card>
        </>
    </div>
  );
  
}
