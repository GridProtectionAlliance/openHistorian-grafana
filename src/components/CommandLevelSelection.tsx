import React from 'react';
import { FieldSet, InlineField, InlineFieldRow, InlineSwitch, Input } from '@grafana/ui';
import "../css/query-editor.css";
import { CommandLevelFlags } from '../types';


interface CommandLevelSelectorProps { onChange: (value: CommandLevelFlags) => void, query?: CommandLevelFlags }

export const CommandLevelSelector = (props: CommandLevelSelectorProps) => {
  

  const getInitialUpdatedValue = (query: CommandLevelFlags | undefined): CommandLevelFlags => {
    return query ?? {
      DropEmpty: false,
      IncludePeaks: false,
      FullResolution: false,
      RadialDistribution: false,
      Radius: 1.5,
      Zoom: 2.0
    };
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>, setting: 'DropEmpty' | 'IncludePeaks' | 'FullResolution' | 'RadialDistribution') => {
    let updated: CommandLevelFlags = getInitialUpdatedValue(props.query);
    updated[setting] = !updated[setting];
    props.onChange(updated);
  };

  function onRadiusChange(val: any) {
    let updated: CommandLevelFlags = getInitialUpdatedValue(props.query);
    updated.Radius = parseFloat(val.target.value.toString());
    props.onChange(updated);
  }

  function onZoomChange(val: any) {
    let updated: CommandLevelFlags = getInitialUpdatedValue(props.query);
    updated.Zoom = parseFloat(val.target.value.toString());
    props.onChange(updated);
  }

  return <FieldSet>
    <InlineFieldRow>
      <InlineField label={'Drop Empty Series'} labelWidth={24} tooltip={'Requests that series that return no data be removed from the the visualization targets'}>
        <InlineSwitch
          disabled={false}
          value={props.query?.DropEmpty ?? false}
          onChange={(e) => onChange(e, 'DropEmpty')}
        />
      </InlineField>
      <InlineField label={'Include Peaks'} labelWidth={24} tooltip={'Requests that decimated data from query source include both minimum and maximum interval peaks, note that this can reduce query performance.'}>
        <InlineSwitch
          disabled={false}
          value={props.query?.IncludePeaks ?? false}
          onChange={(e) => onChange(e, 'IncludePeaks')}
        />
      </InlineField>
    </InlineFieldRow>
    <InlineFieldRow>
      <InlineField label={'Full Resolution Data'} labelWidth={24} tooltip={'Requests that query source return full resolution data, note that this can reduce query and/or visualization performance.'}>
        <InlineSwitch
          disabled={false}
          value={props.query?.FullResolution ?? false}
          onChange={(e) => onChange(e, 'FullResolution')}
        />
      </InlineField>
      <InlineField label={'Radial Geo Distribution'} labelWidth={24} tooltip={'Requests that overlapping geo-coordinates, i.e., longitude and latitude, when included as selected as metadata, be distributed radially.'}>
        <InlineSwitch
          disabled={false}
          value={props.query?.RadialDistribution ?? false}
          onChange={(e) => onChange(e, 'RadialDistribution')}
        />
      </InlineField>
    </InlineFieldRow>
    {(props.query?.RadialDistribution ?? false) ? <InlineFieldRow>
      <InlineField label={'Radius'}>
        <Input type={'number'}
          value={(props.query?.Radius ?? 1.5).toString()}
          onChange={onRadiusChange}
        />
      </InlineField>
      <InlineField label={'Zoom'}>
        <Input type={'number'}
          value={(props.query?.Zoom ?? 2.0).toString()}
          onChange={onZoomChange}
        />
      </InlineField>
    </InlineFieldRow> : null}
  </FieldSet>;
}

