import React from 'react';
import { Card, InlineField, Select } from '@grafana/ui';
import { DataSource } from '../datasource';
import { MyVariableQuery, VariableQueryTypes } from '../types';
import "../css/query-editor.css";
import { MetaDataSelector } from './MetaDataFieldSelector';
import { SelectableValue } from '@grafana/data';
import { VariableQuerySelectOptions } from 'js/constants';
import { QueryEditorWizard } from './ElementQueryEditor';
import { TextQuery } from './TextQueryEditor';

interface VariableQueryProps {
  query: MyVariableQuery;
  onChange: (query: MyVariableQuery) => void;
  datasource: DataSource
}

export function VariableQueryEditor({ query, onChange, datasource }: VariableQueryProps) {
  const selectedMode = React.useMemo(() => (query.queryType ?? 'All'), [query])

  const modeChange = React.useCallback((selected: SelectableValue<string>) => { 
    onChange({...query, queryType: ((selected.value ?? 'All') as VariableQueryTypes)})

  }, [query, onChange])
  
  return (
    <div className="gf-form" style={{ display: 'flex', flexDirection: 'column' }}>
        <>
        <Card>
          <Card.Heading>MetaData Fields</Card.Heading>
          <Card.Description>
            <MetaDataSelector 
            datasource={datasource} 
            onChange={(flds) => onChange({...query, field: flds[0]})} 
            query={query.field === undefined? [] : [query.field]}/>

            <InlineField label="For" labelWidth={12}>
                <Select options={VariableQuerySelectOptions} 
                  value={selectedMode} onChange={modeChange}
                  allowCustomValue={false} />
            </InlineField>
          </Card.Description>  
        </Card>
        {selectedMode !== 'All'? <Card>
          <Card.Heading>Point Selection</Card.Heading>
          <Card.Description> 
          {query.queryType === 'Text'? <TextQuery onChange={(t) => onChange({...query, queryText: t})} query={query.queryText}/> : null}
          {query.queryType === 'Elements'? <QueryEditorWizard 
              onChange={(q) => onChange({...query, queryText: q.queryText, parsedQuery: q.parsedQuery})} query={query}
              datasource={datasource}/> : null}
           </Card.Description>  
        </Card> : null}
        </>
    </div>
  );
  
}
