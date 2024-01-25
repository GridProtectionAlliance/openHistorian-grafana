import React from 'react';
import { InlineFieldRow, InlineField, Select, InlineSwitch, FieldSet } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery, QueryTypes } from '../types';
import { QuerySelectOptions } from '../js/constants'
import "../css/query-editor.css";
import { QueryEditorWizard } from './ElementQueryEditor';
import { MetaDataSelector } from './MetaDataFieldSelector';
import { TextQuery } from './TextQueryEditor';
import { CommandLevelSelector } from './CommandLevelSelection';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, datasource, onRunQuery }: Props) {

  const selectedMode = React.useMemo(() => (query.queryType ?? 'Elements'), [query])
  const [forceUpdate, setForceUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {

    const timeout = setTimeout(() => {
      onRunQuery();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceUpdate]);

  const modeChange = React.useCallback((selected: SelectableValue<string>) => {
    onChange({ ...query, queryType: ((selected.value ?? 'Elements') as QueryTypes) })
    setForceUpdate(x => !x);
  }, [query, onChange])

  const OnChange = (p: MyQuery) => {
    onChange(p);
    setForceUpdate(x => !x);
  }

  return (
    <FieldSet style={{ display: 'flex', flexDirection: 'column' }}>
      <FieldSet>
        <h3 className="page-heading" style={{ marginTop: 16 }}>General Settings</h3>
        <FieldSet style={{ marginBottom: 16 }}>
          <table>
            <tr>
              <td>
                <InlineFieldRow>
                  <InlineField label="Data Selection Mode" labelWidth={24}>
                    <Select options={QuerySelectOptions} value={selectedMode} onChange={modeChange} allowCustomValue={false} />
                  </InlineField>
                  <InlineField label="Transpose Query Results" labelWidth={24}>
                    <InlineSwitch value={query.transpose ?? false}
                      onChange={(v) => OnChange({ ...query, transpose: !(query.transpose ?? false) })}
                      showLabel={true}
                    />
                  </InlineField>
                </InlineFieldRow>
              </td>
            </tr>
            <tr style={{ height: 16 }}>
              <td></td>
            </tr>
            <tr>
              <td>
                {selectedMode === 'Elements' ? <CommandLevelSelector query={query.commandLevel} onChange={(q) => OnChange({ ...query, commandLevel: q })} /> : null}
              </td>
            </tr>
          </table>
        </FieldSet>
      </FieldSet>
      <FieldSet style={{ marginBottom: 16 }}>
        <h3 className="page-heading">Meta Data</h3>
        <MetaDataSelector datasource={datasource} onChange={(flds) => OnChange({ ...query, metadataOptions: flds })} query={query.metadataOptions} />
      </FieldSet>
      <FieldSet>
        <h3 className="page-heading">Data Selection</h3>
        {query.queryType === 'Text' ? <TextQuery onChange={(t) => OnChange({ ...query, queryText: t })} query={query.queryText} /> : null}
        {query.queryType === 'Elements' || query.queryType === undefined ? <QueryEditorWizard
          onChange={(q) => OnChange({ ...query, queryText: q.queryText, parsedQuery: q.parsedQuery })} query={query}
          datasource={datasource} /> : null}
      </FieldSet>
    </FieldSet >
  );

}
