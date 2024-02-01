import {
  DataSourceHttpSettings,
  FieldSet,
  InlineFieldRow,
  InlineField,
  Switch,
  Tooltip,
  Select,
  Card,
  TagList,
} from "@grafana/ui";

import React from "react";
import { DataSourcePluginOptionsEditorProps, DataSourceSettings, SelectableValue } from "@grafana/data";
import { DataSourceValueType, MyDataSourceOptions } from "../types";
import { DefaultFlags } from "../js/constants";
import "../css/config-editor.css";
import { getBackendSrv } from "@grafana/runtime";

interface Props
  extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> { }

export function ConfigEditor(props: Props) {
  const { onOptionsChange, options } = props;
  const [dataSourceTypes, setDataSourceTypes] = React.useState<DataSourceValueType[]>([])
  const dataSourceTypeOptions = React.useMemo(() => dataSourceTypes.map(s => ({ value: s.index.toString(), label: s.name })), [dataSourceTypes]);
  const url = React.useMemo(() => (options?.jsonData?.http?.url ?? ''), [options])

  //const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  //.then(() => {
  //  if (isInitialLoad && options.jsonData.valueTypeIndex === undefined) {
  //    onTypeChange({ value: '0' });
  //  }
  //  setIsInitialLoad(false);
  //});

  // Fetch data source value types when URL changes
  React.useEffect(() => {
    if (url.length < 1) {
      return;
    }

    getBackendSrv().post(url + "/GetValueTypes", {}).then((d: DataSourceValueType[]) => setDataSourceTypes(d))
  }, [url]);

  const onHttpChange = (config: DataSourceSettings<MyDataSourceOptions>) => {
    const jsonData = {
      ...options.jsonData,
      flags: options.jsonData.flags || {},
      http: config,
    };

    onOptionsChange({ ...options, jsonData });
  };

  const onFlagsChange = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const { name, checked } = input;

    let updatedFlags: { [key: string]: boolean } = {};

    // Select All
    if (name === "Select All") {
      const selectAllState = !options.jsonData.flags || !options.jsonData.flags["Select All"];

      // Set all flags to the selectAllState
      updatedFlags = Object.keys(DefaultFlags).reduce((acc: { [key: string]: boolean }, flag) => {
        acc[flag] = selectAllState;
        return acc;
      }, {} as { [key: string]: boolean });
    } else {
      // If individual flag is toggled, update its value
      updatedFlags = {
        ...options.jsonData.flags,
        [name]: checked,
      };

      // If any individual flag is unchecked, uncheck the "Select All" flag
      if (!checked) {
        updatedFlags["Select All"] = false;
      }
    }

    const jsonData = {
      ...options.jsonData,
      flags: updatedFlags,
    };

    onOptionsChange({ ...options, jsonData });
  };

  const onTypeChange = (val: SelectableValue<string>) => {
    const index: string = (val.value ?? '0').toString();
    const dataSource: DataSourceValueType | undefined = dataSourceTypes.find(d => d.index.toString() === index);

    const jsonData = {
      ...options.jsonData,
      valueTypeIndex: index,
      valueTypeName: dataSource?.name ?? '',
      timeSeriesDefinitions: dataSource?.timeSeriesDefinition?.split(',') ?? [''],
      metadataTableName: dataSource?.metadataTableName ?? '',
    };

    onOptionsChange({ ...options, jsonData });
  };

  return (
    <FieldSet>
      <DataSourceHttpSettings
        defaultUrl={'../api/grafana'}
        dataSourceConfig={options.jsonData.http ? options.jsonData.http : options}
        showAccessOptions={true}
        onChange={onHttpChange}
      />
      <FieldSet>
        <h3 className="page-heading">
          Excluded Data Flags
          <Tooltip content="Mark flags which you want excluded">
            <span style={{ cursor: "help" }}> 🛈</span>
          </Tooltip>
        </h3>
        <InlineFieldRow>
          {Object.keys(DefaultFlags).map((element, index) => (
            <InlineField key={index} label={element} labelWidth={16}>
              <div className="dark-box">
                <Switch
                  name={element}
                  disabled={false}
                  value={
                    options.jsonData.flags && options.jsonData.flags[element]
                      ? options.jsonData.flags[element]
                      : false
                  }
                  onChange={onFlagsChange}
                />
              </div>
            </InlineField>
          ))}
        </InlineFieldRow>
      </FieldSet>
      <FieldSet>
        <h3 className="page-heading">
          Data Source Type
          <Tooltip content="Determines the type of data that is being queried">
            <span style={{ cursor: "help" }}> 🛈</span>
          </Tooltip>
        </h3>
        <FieldSet>
          <InlineFieldRow>
            <InlineField label="Data Type" labelWidth={24}>
              <Select
                value={options.jsonData.valueTypeIndex}
                options={dataSourceTypeOptions}
                onChange={onTypeChange}
                isLoading={dataSourceTypeOptions.length === 0}
                invalid={options.jsonData.valueTypeIndex === undefined}
              />
            </InlineField>
          </InlineFieldRow>
        </FieldSet>
        <Card>
          <Card.Heading>{options.jsonData.valueTypeName}</Card.Heading>
          <Card.Description>
            <p>This type includes the following elements: </p>
            <TagList className="pull-left" tags={options.jsonData.timeSeriesDefinitions ?? ['']} />
          </Card.Description>
        </Card>
      </FieldSet>
    </FieldSet>
  );
}
