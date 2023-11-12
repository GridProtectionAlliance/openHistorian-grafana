import React from 'react';
import {  InlineField, TextArea } from '@grafana/ui';
import "../css/query-editor.css";


interface TextQueryProps { onChange: (value: string) => void, query: string }

export const TextQuery = (props: TextQueryProps) => {
  return <div style={{ width: '100%' }}>
  <InlineField label="Query Editor" labelWidth={12}>
    <TextArea
      value={props.query}
      onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => props.onChange(evt.target.value)}
      rows={10} 
      style={{ minWidth: '300px', width: '100%' }}
    />
  </InlineField>
</div>;
}
