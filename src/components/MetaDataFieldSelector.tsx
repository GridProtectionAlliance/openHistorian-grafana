import React from 'react';
import { InlineField, AsyncMultiSelect } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { DataSource } from '../datasource';
import { IMetaDataField } from '../types';
import "../css/query-editor.css";
import { getBackendSrv } from "@grafana/runtime";
import _ from 'lodash';

interface MetaDataProps { datasource: DataSource, onChange: (value: IMetaDataField[]) => void, query: IMetaDataField[] }

export const MetaDataSelector = (props: MetaDataProps) => {

  const [tableOptions, setTableOptions] = React.useState<string[]>([]);
  const [metaDataOptions, setMetaDataOptions] = React.useState<IMetaDataField[]>([]);
  const [selectedMetaDataOptions, setSelectionOptions] = React.useState<Array<SelectableValue<string>>>([]);
  
  React.useEffect(() => {
    setSelectionOptions(props.query?.map((q) => ({label: q.Name, value: `${q.Table};${q.Name}`}) ?? []));
  }, [props.query])

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/gettableoptions", props.datasource.isPhasor)
      .then((d: string[]) => { setTableOptions(d); })
  }, [props.datasource.isPhasor, props.datasource.url])

  React.useEffect(() => {
    if (tableOptions.length === 0) {
      return;
    }
    getBackendSrv().post(props.datasource.url + "/getmetadataoptions", {Tables: tableOptions})
      .then((d: object) => { 
        const fields: IMetaDataField[] = [];
        for (const [k, v] of Object.entries(d ?? {})) {
          fields.push(...(v as string[]).map(m => ({Table: k, Name: m})))
        }
        setMetaDataOptions(fields);
      })
  }, [props.datasource.isPhasor, props.datasource.url, tableOptions])

  const searchTable = async (inputValue: string) => {
    return tableOptions.map( t => ({
        label: t,
        value: t,
        options: metaDataOptions
          .filter(m => m.Table === t && (m.Table.toLowerCase().includes(inputValue.toLowerCase()) || m.Name.toLowerCase().includes(inputValue.toLowerCase())))
          .map((m) => ({value: `${m.Table};${m.Name}`, label: m.Name}))
    }));
  };

  const onTableChange = async (selected: Array<SelectableValue<string>>) => {
    if (metaDataOptions.length === 0) {
      return;
    }
    const flds = metaDataOptions.filter((m) => selected.find(s => s.value === `${m.Table};${m.Name}`))
    props.onChange(flds);
  };

  return <InlineField label="Metadata" labelWidth={12}>
  <div>
    <AsyncMultiSelect
      loadOptions={searchTable}
      defaultOptions
      value={selectedMetaDataOptions}
      onChange={onTableChange}
      isSearchable
    />
  </div>
</InlineField>;
}
