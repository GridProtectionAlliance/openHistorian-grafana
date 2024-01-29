import React from 'react';
import { FieldSet, InlineField, InlineFieldRow, InlineSwitch, Input } from '@grafana/ui';
import "../css/query-editor.css";
import { CommandLevelFlags } from '../types';


interface CommandLevelSelectorProps { onChange: (value: CommandLevelFlags) => void, query?: CommandLevelFlags }

export const CommandLevelSelector = (props: CommandLevelSelectorProps) => {

  const onChange = (event: React.FormEvent<HTMLInputElement>, setting: 'DropEmpty' | 'IncludePeaks' | 'FullResolution' | 'RadialDistribution') => {

    let updated: CommandLevelFlags = {
      DropEmpty: false,
      IncludePeaks: false,
      FullResolution: false,
      RadialDistribution: false,
      Radius: 1.5,
      Zoom: 2.0
    };

    if (props.query !== undefined) {
      updated = { ...props.query };
    }

    updated[setting] = !updated[setting];
    props.onChange(updated);

  };

  function onRadiusChange(val: any) {
    let updated: CommandLevelFlags = {
      DropEmpty: false,
      IncludePeaks: false,
      FullResolution: false,
      RadialDistribution: false,
      Radius: 1.5,
      Zoom: 2.0
    };

    if (props.query !== undefined) {
      updated = { ...props.query };
    }

    updated.Radius = parseFloat(val.toString());
    props.onChange(updated);
  }

  function onZoomChange(val: any) {
    let updated: CommandLevelFlags = {
      DropEmpty: false,
      IncludePeaks: false,
      FullResolution: false,
      RadialDistribution: false,
      Radius: 1.5,
      Zoom: 2.0
    };

    if (props.query !== undefined) {
      updated = { ...props.query };
    }

    updated.Zoom = parseFloat(val.toString());
    props.onChange(updated);
  }
  return <FieldSet>
    <InlineFieldRow>
      <InlineField label={'Drop Empty Series'} labelWidth={24}>
        <InlineSwitch
          disabled={false}
          value={props.query?.DropEmpty ?? false}
          onChange={(e) => onChange(e, 'DropEmpty')}
        />
      </InlineField>

      <InlineField label={'Include Peaks'} labelWidth={24}>
        <InlineSwitch
          disabled={false}
          value={props.query?.IncludePeaks ?? false}
          onChange={(e) => onChange(e, 'IncludePeaks')}
        />
      </InlineField>
    </InlineFieldRow>

    <InlineFieldRow>
      <InlineField label={'Get Full Resolution Data'} labelWidth={24}>
        <InlineSwitch
          disabled={false}
          value={props.query?.FullResolution ?? false}
          onChange={(e) => onChange(e, 'FullResolution')}
        />
      </InlineField>

      <InlineField label={'Distribute Radially'} labelWidth={24}>
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

