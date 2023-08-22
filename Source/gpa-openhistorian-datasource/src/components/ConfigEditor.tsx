import {
  DataSourceHttpSettings,
  InlineFieldRow,
  InlineField,
  Switch,
  Tooltip,
} from "@grafana/ui";

import React from "react";
import { DataSourcePluginOptionsEditorProps, DataSourceSettings } from "@grafana/data";
import { MyDataSourceOptions } from "../types";
import { DefaultFlags } from "../js/constants";
import "../css/config-editor.css";

interface Props
  extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions> {}

export function ConfigEditor(props: Props) {
  const { onOptionsChange, options } = props;
  const { jsonData } = options;

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

  const onPhasorChange = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const { checked } = input;

    const jsonData = {
      ...options.jsonData,
      phasor: checked,
    };

    onOptionsChange({ ...options, jsonData });
  };


  return (
    <div className="gf-form-group">
      <DataSourceHttpSettings
        defaultUrl={jsonData.http ? jsonData.http.url : ""}
        dataSourceConfig={jsonData.http ? jsonData.http : options}
        showAccessOptions={true}
        onChange={onHttpChange}
      />

      <h4>
        Excluded Data Flags
        <Tooltip content="Mark flags which you want excluded">
          <span style={{ cursor: "help" }}> 🛈</span>
        </Tooltip>
      </h4>
      <InlineFieldRow>
        {Object.keys(DefaultFlags).map((element, index) => (
          <InlineField key={index} label={element} labelWidth={16}>
            <div className="dark-box">
              <Switch
                name={element}
                disabled={false}
                value={
                  jsonData.flags && jsonData.flags[element]
                    ? jsonData.flags[element]
                    : false
                }
                onChange={onFlagsChange}
              />
            </div>
          </InlineField>
        ))}
      </InlineFieldRow>

      <br></br>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h4>Phasor</h4>
        <div className="dark-box">
          <Switch
            name="phasor"
            disabled={false}
            value={jsonData.phasor ?? false}
            onChange={onPhasorChange}
          />
        </div>
      </div>
      
    </div>
  );
}
