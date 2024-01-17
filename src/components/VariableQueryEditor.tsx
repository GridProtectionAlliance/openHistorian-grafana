import React from 'react';
import { InlineField, InlineFieldRow, Input, Select } from '@grafana/ui';
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

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/GetValueTypeTables", {dataTypeIndex: props.datasource.dataSourceValueType, expression: ""})
      .then((d: string[]) => { setTableOptions(d.map(t => ({value: t, label: t}))); })
  }, [props.datasource.url, props.datasource.dataSourceValueType])

  React.useEffect(() => {
    if (props.query?.tableName === undefined || props.query?.tableName.length === 0) {
      return;
    }
    getBackendSrv().post(props.datasource.url + "/GetValueTypeTableFields",{
      dataTypeIndex: props.datasource.dataSourceValueType, 
      expression: props.query.tableName
    }).then((d: FieldDescription[]) => { setFieldOptions(d.map(t => ({value: t.name, label: t.name}))); })

  }, [props.datasource.url, props.datasource.dataSourceValueType, props.query.tableName])

  function onTableChange(t: SelectableValue<string>) {
    props.onChange({...props.query, tableName: t.value ?? '', fieldName: ''})
  }

  
  function onFieldChange(t: SelectableValue<string>) {
    props.onChange({...props.query, fieldName: t.value ?? ''})
  }

  function onConditionChange(val: any) {
    props.onChange({...props.query, condition: val.target.value})
  }


  return (
    <div className="gf-form" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='gf-form-group'> 
      <InlineFieldRow>
        <InlineField label="Select" labelWidth={12}>
         <Select  
            value={props.query?.fieldName}
            options={fieldOptions}
            isLoading={fieldOptions.length === 0}
            onChange={onFieldChange}
            isSearchable
            invalid={(props.query?.fieldName?.length ?? 0) === 0}
            width={80}
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
            width={80}
          />
        </InlineField>
        <InlineField label="WHERE" labelWidth={12}>
          <Input  
          value={props.query?.condition}
          onChange={onConditionChange}
          />
        </InlineField>
      </InlineFieldRow>
    </div>
  </div>
  );
  
}
