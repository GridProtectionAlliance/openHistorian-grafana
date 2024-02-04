import React from 'react';
import { InlineFieldRow, InlineField, Select, InlineSwitch, FieldSet, IconButton } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { openHistorianDataSourceOptions, openHistorianQuery, QueryBase, QueryTypes } from '../types';
import { QuerySelectOptions } from '../js/constants'
import "../css/query-editor.css";
import { QueryEditorWizard } from './ElementQueryEditor';
import { MetaDataSelector } from './MetaDataFieldSelector';
import { TextQuery } from './TextQueryEditor';
import { CommandLevelSelector } from './CommandLevelSelection';

type Props = QueryEditorProps<DataSource, openHistorianQuery, openHistorianDataSourceOptions>;

export function QueryEditor({ query, onChange, datasource, onRunQuery }: Props) {

  const selectedMode = React.useMemo(() => (query.queryType ?? 'Elements'), [query])

  const modeChange = (selected: SelectableValue<string>) => {
    const newMode = ((selected.value ?? 'Elements') as QueryTypes);
    const oldMode = ((query?.queryType ?? 'Elements') as QueryTypes);

    if (oldMode === 'Elements' && newMode === 'Text' && (queryTextMatches() || window.confirm('Text mode has existing, distinct query expression text. Do you want replace the existing text query expression with the one that was built here?'))) {
      onChange({ ...query, queryText: generateTextQuery(query), queryType: newMode })
      return;
    }
    onChange({ ...query, queryType: newMode })
  }

  const queryTextMatches = (): boolean => {
    if ((query.queryText?.length ?? 0) === 0) {
      return true;
    }

    const src: string = generateTextQuery(query).replace(/\s+/g, '').toLowerCase();
    const dest: string = query.queryText.replace(/\s+/g, '').toLowerCase();

    return src === dest;
  }

  const generateTextQuery = (q: openHistorianQuery) => {
    let text = datasource.targetToString(q as QueryBase);

    if (q.commandLevel?.DropEmpty ?? false) {
      text = `${text}; dropEmptySeries`;
    }

    if (q.commandLevel?.IncludePeaks ?? false) {
      text = `${text}; includePeaks`;
    }

    if (q.commandLevel?.FullResolution ?? false) {
      text = `${text}; fullResolutionQuery`;
    }

    if (q.commandLevel?.RadialDistribution ?? false) {
      text = `${text}; radialDistribution={radius=${(q.commandLevel?.Radius ?? 1.5)}; zoom=${(q.commandLevel?.Zoom ?? 2)}}`;
    }
    return text;
  }

  const elementsOnChange = (p: openHistorianQuery) => {
    onChange(p);
    onRunQuery();
  }

  const textOnChange = (p: openHistorianQuery) => {
    onChange(p);
  }

  const onBlur = () => {
    onRunQuery();
  };

  return (
    <FieldSet style={{ display: 'flex', flexDirection: 'column' }} onBlur={onBlur}>
      <FieldSet style={{ marginBottom: 0 }}>
        <h3 className="page-heading" style={{ marginTop: 16 }}>General Settings</h3>
        <FieldSet style={{ marginBottom: 16 }}>
          <table>
            <tr>
              <td>
                <InlineFieldRow>
                  <InlineField label="Data Selection Mode" labelWidth={24}>
                    <Select options={QuerySelectOptions} value={selectedMode} onChange={modeChange} allowCustomValue={false} />
                  </InlineField>
                  {selectedMode === 'Elements' ? <IconButton name={'question-circle'} size='lg' iconType='default' variant='secondary' style={{ marginTop: 4, marginRight: 0 }}
                    tooltip={<div>
                      <p style={{ marginBottom: 8 }}>Current Query Expression:</p>
                      <p><em>{generateTextQuery(query)}</em></p>
                    </div>} /> : null}
                  <InlineField label="Transpose Query Results" labelWidth={24} style={{ marginLeft: 16 }}>
                    <InlineSwitch value={query.transpose ?? false}
                      onChange={(v) => elementsOnChange({ ...query, transpose: !(query.transpose ?? false) })}
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
                {selectedMode === 'Elements' ? <CommandLevelSelector query={query.commandLevel} onChange={(q) => elementsOnChange({ ...query, commandLevel: q })} /> : null}
              </td>
            </tr>
          </table>
        </FieldSet>
      </FieldSet>
      <FieldSet style={{ marginBottom: 16 }}>
        <h3 className="page-heading">Meta Data</h3>
        <MetaDataSelector datasource={datasource} onChange={(fields) => elementsOnChange({ ...query, metadataOptions: fields })} query={query.metadataOptions} />
      </FieldSet>
      <FieldSet>
        <h3 className="page-heading">Data Selection</h3>
        {query.queryType === 'Text' ? <TextQuery onChange={(t) => textOnChange({ ...query, queryText: t })} query={query.queryText} /> : null}
        {query.queryType === 'Elements' || query.queryType === undefined ? <QueryEditorWizard
          onChange={(q) => elementsOnChange({ ...query, queryText: q.queryText, parsedQuery: q.parsedQuery })} query={query}
          datasource={datasource} /> : null}
      </FieldSet>
    </FieldSet >
  );
}
