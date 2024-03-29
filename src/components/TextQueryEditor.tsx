import React from 'react';
import { FieldSet, InlineField, TextArea } from '@grafana/ui';
import "../css/query-editor.css";


interface TextQueryProps { onChange: (value: string) => void, query: string }

export const TextQuery = (props: TextQueryProps) => {
  return <FieldSet>
    <InlineField label="Query Editor" labelWidth={12} grow={true} shrink={true}>
      <TextArea
        value={props.query}
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => props.onChange(evt.target.value)}
        rows={10}
        width={150}
      />
    </InlineField>
  </FieldSet>;
}
