import {
  DataSourceHttpSettings,
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
  extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

export function ConfigEditor(props: Props) {
  const { onOptionsChange, options } = props;
  const [dataSourceTypes, setDataSourceTypes] = React.useState<DataSourceValueType[]>([])
  const dataSourceTypeOptions = React.useMemo(() => dataSourceTypes.map(s => ({value: s.index.toString(), label: s.name})), [dataSourceTypes]);

  const url = React.useMemo(() => (options?.jsonData?.http?.url ?? ''), [options])
  React.useEffect(() => {
    if (url.length < 1) {
      return;
    }
    getBackendSrv().post(url + "/GetValueTypes", {}).then((d: DataSourceValueType[]) => setDataSourceTypes(d));
  }, [url])

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
 
    const jsonData = {
      ...options.jsonData,
      valueType: (val.value ?? '1')
    };

    onOptionsChange({ ...options, jsonData });
  };


  return (
    <div className="gf-form-group">
      <DataSourceHttpSettings
        defaultUrl={options.jsonData.http ? options.jsonData.http.url : ""}
        dataSourceConfig={options.jsonData.http ? options.jsonData.http : options}
        showAccessOptions={true}
        onChange={onHttpChange}
      />
      <div className="gf-form-group">
        <h3 className="page-heading">
          Excluded Data Flags
          <Tooltip content="Mark flags which you want excluded">
            <span style={{ cursor: "help" }}> 🛈</span>
          </Tooltip>
        </h3>
        <div className="gf-form-inline">
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
        </div>
      </div>
      <div className="gf-form-group">
        <h3 className="page-heading">
          Data Source Type
          <Tooltip content="Determines the type of data that is being queried">
            <span style={{ cursor: "help" }}> 🛈</span>
          </Tooltip>
        </h3>
        <div className="gf-form-group">
          <InlineFieldRow>
            <InlineField label="Data Type" labelWidth={24}>
              <Select  
                value={options.jsonData.valueType}
                options={dataSourceTypeOptions}
                onChange={onTypeChange}
                isLoading={dataSourceTypeOptions.length === 0}
                invalid={options.jsonData.valueType === undefined}
                />
            </InlineField>
          </InlineFieldRow>
        </div>
        <Card>
          <Card.Heading>{dataSourceTypes.find(d => d.index.toString() === options.jsonData.valueType)?.name}</Card.Heading>
          <Card.Description>
            <p>This type includes the following elements: </p>
            <TagList className="pull-left" tags={dataSourceTypes.find(d => d.index.toString() === options.jsonData.valueType)?.timeSeriesDefinition.split(',') ?? []}/>
          </Card.Description>
        </Card>
      </div>
    </div>
  );
}
