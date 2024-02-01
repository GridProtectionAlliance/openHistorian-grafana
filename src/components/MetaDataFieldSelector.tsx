import React from 'react';
import { InlineField, InlineFieldRow, Select, IconButton, Button, FieldSet } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { DataSource } from '../datasource';
import { FieldDescription, IMetaDataField } from '../types';
import "../css/query-editor.css";
import { getBackendSrv } from "@grafana/runtime";
import _ from 'lodash';

interface MetaDataProps { datasource: DataSource, onChange: (value: IMetaDataField[]) => void, query: IMetaDataField[] }

export const MetaDataSelector = (props: MetaDataProps) => {
  const [tableOptions, setTableOptions] = React.useState<Array<SelectableValue<string>>>([]);

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/GetValueTypeTables", { dataTypeIndex: props.datasource.valueTypeIndex, expression: "" })
      .then((d: string[]) => { setTableOptions(d?.map((t) => ({ value: t, label: t })) ?? []); })
  }, [props.datasource.valueTypeIndex, props.datasource.url])

  const onRemoveField = (index: number) => {
    let u = [...props.query];
    u.splice(index, 1);
    props.onChange(u);
  };

  const onAddFld = () => {
    if (props.query === undefined) {
      props.onChange([{ Table: props.datasource.metadataTableName, FieldName: "" }]);
    }
    props.onChange([...props.query, { Table: props.datasource.metadataTableName, FieldName: "" }]);
  };

  const onUpdateFld = (fld: IMetaDataField, index: number) => {

    let u = [...props.query];
    u[index] = fld;
    props.onChange(u);
  };

  return (
    <FieldSet>
      {props.query?.map((q, i) => <MetaDataFieldSelector
        Field={q} key={i} Remove={() => onRemoveField(i)} Update={(fld) => onUpdateFld(fld, i)}
        TableOptions={tableOptions} Datasource={props.datasource} />)}
      <InlineFieldRow>
        <InlineField>
          <Button onClick={() => onAddFld()}> Add Meta Data Field</Button>
        </InlineField>
      </InlineFieldRow>
    </FieldSet>)
}

interface MeataDataFieldSelectorProps {
  Field: IMetaDataField,
  Remove: () => void,
  Update: (fld: IMetaDataField) => void,
  TableOptions: Array<SelectableValue<string>>,
  Datasource: DataSource
}

const MetaDataFieldSelector = (props: MeataDataFieldSelectorProps) => {
  const [fieldOptions, setFieldOptions] = React.useState<Array<SelectableValue<string>>>([]);

  React.useEffect(() => {
    setFieldOptions([]);
    if (props.Field.Table === undefined) {
      return;
    }
    getBackendSrv().post(props.Datasource.url + "/GetValueTypeTableFields", {
      dataTypeIndex: props.Datasource.valueTypeIndex,
      expression: props.Field.Table
    }).then((d: FieldDescription[]) => setFieldOptions(d?.map((fld) => ({ value: fld.name, label: fld.name })) ?? []))
  }, [props.Field.Table, props.Datasource.url, props.Datasource.valueTypeIndex])

  const updateTable = (val: SelectableValue<string>) => {
    props.Update({ Table: val.value ?? "", FieldName: "" })
  };

  const updateField = (val: SelectableValue<string>) => {
    props.Update({ Table: props.Field.Table, FieldName: val.value ?? "" })
  };

  return <InlineFieldRow>
    <InlineField label="Table" labelWidth={12}>
      <Select
        value={props.Field.Table}
        options={props.TableOptions}
        onChange={updateTable}
        isLoading={props.TableOptions.length === 0}
        invalid={(props.Field?.Table?.length ?? 0) === 0}
      />
    </InlineField>
    <InlineField label="Field" labelWidth={12}>
      <Select
        value={props.Field.FieldName}
        options={fieldOptions}
        onChange={updateField}
        isLoading={fieldOptions.length === 0}
        invalid={(props.Field?.FieldName?.length ?? 0) === 0}
        disabled={(props.Field?.Table?.length ?? 0) === 0}
      />
    </InlineField>
    <InlineField>
      <IconButton name={'trash-alt'} size='xl' iconType='default' variant='destructive' style={{ marginTop: 4, marginLeft: 4 }} onClick={() => props.Remove()} />
    </InlineField>
  </InlineFieldRow>

}
