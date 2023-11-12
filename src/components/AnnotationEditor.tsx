import React from 'react';
import {  InlineField, TextArea } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';
import "../css/query-editor.css";

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;


export function AnnotationEditor({ query, onChange }: Props) {

  React.useEffect(() => {
    if (query.queryType !== 'Annotations') {
      onChange({...query, queryType: 'Annotations'})
    }
    }, [query, onChange])

  return (
    <div className="gf-form" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%' }}>
        <InlineField label="Query" labelWidth={12}>
          <TextArea
            value={query.queryText}
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => onChange({...query, queryText: evt.target.value})}
            rows={10} 
            style={{ minWidth: '300px', width: '100%' }}
          />
        </InlineField>
      </div>
    </div>
  );
  
}

