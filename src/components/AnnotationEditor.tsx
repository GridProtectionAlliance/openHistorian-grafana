import React from 'react';
import { FieldSet, InlineField, TextArea } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { OpenHistorianDataSourceOptions, OpenHistorianQuery } from '../types';
import "../css/query-editor.css";

type Props = QueryEditorProps<DataSource, OpenHistorianQuery, OpenHistorianDataSourceOptions>;

export function AnnotationEditor({ query, onChange }: Props) {

  React.useEffect(() => {
    if (query.queryType !== 'Annotations') {
      onChange({ ...query, queryType: 'Annotations' })
    }
  }, [query, onChange])

  return (
    <FieldSet style={{ display: 'flex', flexDirection: 'column' }}>
      <InlineField label="Query" labelWidth={'auto'} grow={true} shrink={true}>
        <TextArea
          value={query.queryText}
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => onChange({ ...query, queryText: evt.target.value })}
          rows={5}
          width={150}
        />
      </InlineField>
    </FieldSet>
  );
}

