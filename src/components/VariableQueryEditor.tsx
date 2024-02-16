import React from 'react';
import { FieldSet, InlineField, InlineFieldRow, Input, MultiSelect, Select } from '@grafana/ui';
import { DataSource } from '../datasource';
import { FieldDescription, MyVariableQuery } from '../types';
import "../css/query-editor.css";
import { SelectableValue } from '@grafana/data';
import { getBackendSrv } from '@grafana/runtime';

interface VariableQueryProps {
  query: MyVariableQuery;
  onChange: (query: MyVariableQuery) => void;
  datasource: DataSource
}

export function VariableQueryEditor(props: VariableQueryProps) {
  const [tableOptions, setTableOptions] = React.useState<Array<SelectableValue<string>>>([]);
  const [fieldOptions, setFieldOptions] = React.useState<Array<SelectableValue<string>>>([]);
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const { onChange, query } = props;

  // Effect for setting default tableName
  React.useEffect(() => {
    if (isInitialLoad && !query.tableName) {
      onChange({ ...query, tableName: 'ActiveMeasurements', fieldNames: ['PointTag'] });
    }
    setIsInitialLoad(false);
  }, [isInitialLoad, onChange, query]);

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/GetValueTypeTables", {
      dataTypeIndex: props.datasource.valueTypeIndex /* restriction to this datasource */,
      expression: ""
    })
      .then((d: string[]) => { setTableOptions(d.map(t => ({ value: t, label: t }))); })
  }, [props.datasource.url, props.datasource.valueTypeIndex, query.tableName])

  React.useEffect(() => {
    if (!query.tableName) {
      return;
    }

    getBackendSrv().post(props.datasource.url + "/GetValueTypeTableFields", {
      dataTypeIndex: props.datasource.valueTypeIndex /* no restriction */,
      expression: query.tableName
    })
      .then((d: FieldDescription[]) => { setFieldOptions(d.map(t => ({ value: t.name, label: t.name }))); })
  }, [props.datasource.url, props.datasource.valueTypeIndex, query.tableName])

  function onTableChange(t: SelectableValue<string>) {
    let newFieldNames = props.query.fieldNames;

    if (t.value === 'ActiveMeasurements') {
      if (!newFieldNames.includes('PointTag')) {
        newFieldNames = ['PointTag'];
      }
    } else {
      newFieldNames = ['*'];
    }

    props.onChange({ ...props.query, tableName: t.value ?? '', fieldNames: newFieldNames });
  }

  function onFieldChange(t: Array<SelectableValue<string>>) {
    let newFieldNames = t.map(sv => sv.value?.toString() ?? '');

    // Handle special case for ActiveMeasurements (allows 'PointTag` field to be deselected)
    if (props.query.tableName === 'ActiveMeasurements' && newFieldNames.length === 0) {
      newFieldNames = ['*'];
    }

    props.onChange({ ...props.query, fieldNames: newFieldNames });
  }

  function onConditionChange(val: any) {
    props.onChange({ ...props.query, condition: val.target.value })
  }

  return (
    <FieldSet style={{ display: 'flex', flexDirection: 'column' }}>
      <FieldSet>
        <InlineFieldRow>
          <InlineField label="Select" labelWidth={12}>
            <MultiSelect
              value={props.query?.fieldNames}
              options={fieldOptions}
              isLoading={fieldOptions.length === 0}
              onChange={onFieldChange}
              isSearchable
              invalid={(props.query?.fieldNames?.length ?? 0) === 0}
              disabled={(props.query?.tableName?.length ?? 0) === 0}
            />
          </InlineField>
          <InlineField label="FROM" labelWidth={12}>
            <Select
              value={props.query?.tableName}
              options={tableOptions}
              isLoading={tableOptions.length === 0}
              onChange={onTableChange}
              isSearchable
              invalid={(props.query?.tableName?.length ?? 0) === 0}
            />
          </InlineField>
        </InlineFieldRow>
        <InlineFieldRow>
          <InlineField label="WHERE" labelWidth={12}>
            <Input
              value={props.query?.condition}
              onChange={onConditionChange}
            />
          </InlineField>
        </InlineFieldRow>
      </FieldSet>
    </FieldSet>
  );
}
