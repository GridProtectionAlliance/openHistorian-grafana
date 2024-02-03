import React from 'react';
import { InlineField, AsyncMultiSelect, Select, Input, InlineFieldRow, Collapse, FieldSet, IconButton, Card, InlineLabel, Button } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { DataSource } from '../datasource';
import { FilterQuery, FunctionDescription, FunctionQuery, ParameterType, ParsedQuery, QueryBase } from '../types';
import "../css/query-editor.css";
import { getBackendSrv } from "@grafana/runtime";
import _ from 'lodash';

interface Props { onChange: (value: QueryBase) => void, query: QueryBase, datasource: DataSource, includeFunctions?: boolean }

export const QueryEditorWizard = (props: Props) => {
  const [elements, setElements] = React.useState<string[]>(props.query.parsedQuery?.Elements ?? []);
  const [functions, setFunctions] = React.useState<FunctionQuery[]>(props.query.parsedQuery?.Functions ?? []);
  const [availableFunctions, setAvailableFunctions] = React.useState<FunctionDescription[]>([]);
  const [tableOptions, setTableOptions] = React.useState<string[]>([]);
  const [filters, setFilters] = React.useState<FilterQuery[]>(props.query.parsedQuery?.Filters ?? []);

  React.useEffect(() => {
    if (!(props.includeFunctions ?? true)) {
      setAvailableFunctions([]);
      return;
    }

    getBackendSrv().post(props.datasource.url + "/GetValueTypeFunctions", {
      dataTypeIndex: props.datasource.valueTypeIndex,
      expression: ""
    }).then((d) => {
      setAvailableFunctions(d);
    });
  }, [props.datasource.url, props.includeFunctions, props.datasource.valueTypeIndex])

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/GetValueTypeTables", { dataTypeIndex: props.datasource.valueTypeIndex, expression: "" })
      .then((d: string[]) => { setTableOptions(d); })
  }, [props.datasource.url, props.datasource.valueTypeIndex])


  function onElementChange(e: string[], fx: string | undefined, filter: boolean) {
    setElements(e);
    if (fx !== undefined) {
      setFunctions(f => {
        let u = _.clone(f); u.push({
          Function: fx,
          Parameters: availableFunctions.find(f => f.name === fx)?.parameters.map(p => ({ type: p, value: p.type.includes("IAsyncEnumerable") ? { Elements: [], Functions: [], Filters: [] } : p.default } as ParameterType)) ?? [],
        }); return u;
      })
    }
    const u = { ...props.query };
    if (u.parsedQuery === undefined) {
      u.parsedQuery = { Elements: [], Functions: [], Filters: [] }
    }
    u.parsedQuery.Elements = e;
    if (filter) {
      u.parsedQuery.Filters.push({ Table: props.datasource.metadataTableName, Condition: '', Number: 10, NumberMode: 'TOP' });
      setFilters(u.parsedQuery.Filters);
    }
    props.onChange(u);
  }

  function onFilterChange(f: FilterQuery | undefined, index: number) {
    const u = { ...props.query };
    if (u.parsedQuery === undefined) {
      u.parsedQuery = { Elements: [], Functions: [], Filters: [] }
    }
    if (f === undefined) {
      u.parsedQuery.Filters.splice(index, 1);
    }
    else {
      u.parsedQuery.Filters[index] = f;
    }
    setFilters(u.parsedQuery.Filters);
    props.onChange(u);
  }

  function onFunctionChange(f: FunctionQuery | undefined, index: number) {
    const u = { ...props.query };
    if (u.parsedQuery === undefined) {
      u.parsedQuery = { Elements: [], Functions: [], Filters: [] }
    }
    if (f === undefined) {
      u.parsedQuery.Functions.splice(index, 1);
    }
    else {
      u.parsedQuery.Functions[index] = f;
    }
    setFunctions(u.parsedQuery.Functions);
    props.onChange(u);
  }


  return <div style={{ width: '100%' }}>
    <ElementQuery
      datasource={props.datasource}
      elements={elements} update={onElementChange}
      availableFunctions={availableFunctions}
    />
    {functions?.map((f, i) => <FunctionQueryUI key={f.Function}
      update={(f) => onFunctionChange(f, i)}
      func={f} availableFunctions={availableFunctions}
      availableTables={tableOptions}
      datasource={props.datasource}
    />)}
    {filters?.map((f, i) => <FilterQueryUI
      key={i}
      availableTables={tableOptions}
      update={(f) => onFilterChange(f, i)} filter={f} />)}
  </div>;
}

interface ElementQueryProps {
  datasource: DataSource,
  update: (elements: string[], fx: string | undefined, filter: boolean) => void,
  elements: string[],
  availableFunctions: FunctionDescription[]
}

export const ElementQuery = (props: ElementQueryProps) => {
  const selectedOptions = React.useMemo(() => props.elements.map((d) => ({ value: d, label: d })), [props.elements]);

  const loadOptions = async (inputValue: string) => {
    const d = await getBackendSrv().post(props.datasource.url + "/Search", {
      dataTypeIndex: props.datasource.valueTypeIndex,
      expression: inputValue
    })
    const r: any[] = d.map((p: string) => ({ value: p, label: p }));
    if ('filter'.includes(inputValue.toLocaleLowerCase())) {
      r.push({ value: 'FILTER', label: 'FILTER' });
    }
    props.availableFunctions.filter((f) => f.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()) ||
      (f.aliases?.some((a) => a.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())) ?? false))
      .forEach((f) => {
        r.push({ label: f.name, value: 'fx-' + f.name })
      })
    return r;
  };

  const onElementsChange = (selected: Array<SelectableValue<string>>) => {
    const selectedValues = selected.map((item) => item.value) as string[];
    let hasFilter = selectedValues.includes('FILTER');
    const fx = selectedValues.filter(s => s.startsWith('fx-'));
    let func: string | undefined = undefined;
    if (fx.length > 0) {
      func = fx[0].substring(3);
    }

    props.update(selectedValues.filter(i => i !== 'FILTER' && !i.startsWith('fx-')), func, hasFilter);
  };

  return <InlineFieldRow>
    <InlineField label="Query" labelWidth={'auto'}>
      <AsyncMultiSelect
        loadOptions={loadOptions}
        defaultOptions={true}
        value={selectedOptions}
        onChange={onElementsChange}
        isSearchable
      />
    </InlineField>
    <Button size={'sm'} variant='secondary' fill='solid' icon='plus-circle' style={{ marginTop: 4, marginLeft: 5 }}
      onClick={() => props.update(selectedOptions.map(d => d.value), undefined, true)}>
      Filter
    </Button>
    <Button size={'sm'} variant='secondary' fill='solid' icon='plus-circle' style={{ marginTop: 4, marginLeft: 5 }}
      onClick={() => props.update(selectedOptions.map(d => d.value), props.availableFunctions.find(() => true)?.name, false)}>
      Function
    </Button>
  </InlineFieldRow>
}

interface FilterQueryProps {
  update: (filter: FilterQuery | undefined) => void,
  filter: FilterQuery,
  availableTables: string[]
}

const FilterQueryUI = (props: FilterQueryProps) => {
  const numberOptions = [
    { label: 'TOP', value: 'TOP' },
    { label: 'ALL', value: '' }]

  const tableOptions: Array<SelectableValue<string>> = React.useMemo(() => props.availableTables.map((t) => ({ label: t, value: t })), [props.availableTables])
  const selectedOptions: Array<SelectableValue<string>> = React.useMemo(() => props.filter.Table === '' ? [] : [{ value: props.filter.Table, label: props.filter.Table }], [props.filter.Table]);

  function onNumberModeChange(val: SelectableValue<string>) {
    props.update({ ...props.filter, NumberMode: val.value as ('TOP' | '') })
  }

  function OnNumberChange(val: any) {
    const n = val.target.value;
    props.update({ ...props.filter, Number: parseInt(n, 10) })
  }

  function onTableChange(t: SelectableValue<string>) {
    props.update({ ...props.filter, Table: t.value ?? '' })
  }

  function onConditionChange(val: any) {
    props.update({ ...props.filter, Condition: val.target.value })
  }

  return <FieldSet>
    <InlineFieldRow>
      <IconButton name={'trash-alt'} size='xl' iconType='default' variant='destructive' style={{ marginTop: 4, marginRight: 0 }} onClick={() => props.update(undefined)} />
      <InlineField label={
        <InlineLabel style={{ flexShrink: 1 }}><IconButton name={'filter'} size='md' iconType='default' variant='secondary' style={{ marginLeft: -2 }} />FILTER</InlineLabel>
      } labelWidth={'auto'}>
        <Select
          value={props.filter.NumberMode}
          options={numberOptions}
          onChange={onNumberModeChange}
        />
      </InlineField>
      {props.filter.NumberMode !== '' ? <Input type={'number'}
        min={0} max={99999}
        value={props.filter.Number}
        onChange={OnNumberChange}
        width={10}
      /> : null}
      <InlineField label="" labelWidth={1} transparent={true} style={{ marginLeft: -16 }}>
        <Select
          value={selectedOptions}
          options={tableOptions}
          isLoading={tableOptions.length === 0}
          onChange={onTableChange}
          isSearchable
          width={'auto'}
        />
      </InlineField>
    </InlineFieldRow>
    <InlineFieldRow>
      <InlineField label="WHERE" grow>
        <Input
          value={props.filter.Condition}
          onChange={onConditionChange}
          placeholder="SignalType = 'FREQ'"
        />
      </InlineField>
    </InlineFieldRow>
  </FieldSet>
}

interface FunctionQueryProps {
  update: (func: FunctionQuery | undefined) => void,
  func: FunctionQuery,
  availableFunctions: FunctionDescription[],
  availableTables: string[],
  datasource: DataSource
}


const FunctionQueryUI = (props: FunctionQueryProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const fxDescription = React.useMemo(() => props.availableFunctions.find(f => f.name === props.func.Function), [props.func, props.availableFunctions]);
  const fxOptions = React.useMemo(() => props.availableFunctions.map((f) => ({ value: f.name, label: f.name })), [props.availableFunctions])

  function onFunctionChange(val: SelectableValue<string>) {
    const fx = props.availableFunctions.find(f => f.name === val.value)
    if (fx === null) {
      return
    }
    props.update({
      Function: val.value ?? 'AbsoluteValue', Parameters: fx?.parameters.map((p) => {
        const param: ParameterType = { type: p, value: p.type.includes("IAsyncEnumerable") ? { Elements: [], Functions: [], Filters: [] } : p.default };
        return param;
      }) ?? []
    });

    setIsOpen(true);
  }

  function onValueChange(val: ParameterType, index: number) {
    const u = _.cloneDeep(props.func);
    u.Parameters[index] = val;
    props.update(u);
  }

  return <Collapse collapsible={true} label={
    <InlineFieldRow>
      <IconButton name={'trash-alt'} size='xl' iconType='default' variant='destructive' style={{ marginTop: 4, marginRight: 6 }} onClick={() => props.update(undefined)} />
      <span style={{ marginTop: 5, marginRight: 4, fontSize: 'small' }}>ƒ(x)</span>
      <Select
        value={props.func.Function}
        options={fxOptions}
        onChange={onFunctionChange}
        isSearchable
        tabSelectsValue={true}
        width={'auto'}
      />
      <div style={{ marginTop: 5, marginLeft: 10 }}>{getCategory(fxDescription)} {fxDescription?.returnType.toLowerCase()}{getGroupOperation(fxDescription)} function{extractGroupOperations(fxDescription)}.</div>
    </InlineFieldRow>
  } isOpen={isOpen} onToggle={() => setIsOpen((x) => !x)}>
    <p>{fxDescription?.description}</p>
    <ul>

      {props.func.Parameters.map((p, i) => <li key={p.type.name}>
        <ParameterUI update={(val) => onValueChange(val, i)}
          param={p}
          availableFunctions={props.availableFunctions}
          availableTables={props.availableTables}
          datasource={props.datasource} />
      </li>)}

    </ul>
  </Collapse>;
}

interface ParameterQueryProps {
  update: (p: ParameterType) => void,
  param: ParameterType,
  availableFunctions: FunctionDescription[],
  availableTables: string[],
  datasource: DataSource,
}
const ParameterUI = (props: ParameterQueryProps) => {

  const AngleOptions: Array<SelectableValue<string>> = [{ value: 'Radians', label: 'Radians' }, { value: 'Degrees', label: 'Degrees' }
    , { value: 'Grads', label: 'Grads' }, { value: 'ArcMinutes', label: 'ArcMinutes' },
  { value: 'ArcSeconds', label: 'ArcSeconds' }, { value: 'AngularMil', label: 'AngularMil' }];

  const TimeOption = [
    { value: 'Seconds', label: 'Seconds' },
    { value: 'Nanoseconds', label: 'Nanoseconds' },
    { value: 'Microseconds', label: 'Microseconds' },
    { value: 'Milliseconds', label: 'Milliseconds' },
    { value: 'Minutes', label: 'Minutes' },
    { value: 'Hours', label: 'Hours' },
    { value: 'Days', label: 'Days' },
    { value: 'Weeks', label: 'Weeks' },
    { value: 'Ke', label: 'Ke (traditional Chinese)' },
    { value: 'Ticks', label: 'Ticks' },
    { value: 'PlanckTime', label: 'PlanckTime' },
    { value: 'AtomicUnitsOfTime', label: 'AtomicUnitsOfTime' }];

  const BooleanOption = [{ value: '1', label: 'True' }, { value: '0', label: 'False' },]


  function onElementChange(e: string[], fx: string | undefined, filter: boolean) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = { type: props.param.type, value: { Elements: [], Functions: [], Filters: [] } }
    }
    if (fx !== undefined) {
      (u.value as ParsedQuery)?.Functions.push({
        Function: fx,
        Parameters: [],
      })
    }

    (u.value as ParsedQuery).Elements = e;
    if (filter) {
      (u.value as ParsedQuery)?.Filters.push({ Table: props.datasource.metadataTableName, Condition: '', Number: 10, NumberMode: 'TOP' });
    }
    props.update(u);
  }

  function onFilterChange(f: FilterQuery | undefined, index: number) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = { type: props.param.type, value: { Elements: [], Functions: [], Filters: [] } }
    }
    if (f === undefined) {
      (u.value as ParsedQuery)?.Filters.splice(index, 1)
    } else {
      (u.value as ParsedQuery).Filters[index] = f;
    }
    props.update(u);
  }

  function onFunctionChange(f: FunctionQuery | undefined, index: number) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = { type: props.param.type, value: { Elements: [], Functions: [], Filters: [] } }
    }
    if (f === undefined) {
      (u.value as ParsedQuery)?.Functions.splice(index, 1);
    } else {
      (u.value as ParsedQuery).Functions[index] = f;
    }
    props.update(u);
  }

  function onStringChange(val: any) {
    props.update({ type: props.param.type, value: val.target.value })
  }

  function onSelectChange(val: SelectableValue<string>) {
    props.update({ type: props.param.type, value: val.value as string })
  }

  return <Card>
    <Card.Heading>{props.param.type.name} ({props.param.type.required ? 'required' : 'optional'})</Card.Heading>
    <Card.Description>
      <>
        <p>{props.param.type.description} ({props.param.type.type}{!props.param.type.required && props.param.type.default?.length > 0 ? `: default = ${props.param.type.default}` : ''})</p>

        {props.param.type.type.includes("IAsyncEnumerable") ? <>
          <ElementQuery
            datasource={props.datasource}
            elements={(props.param?.value as ParsedQuery)?.Elements ?? []}
            update={onElementChange}
            availableFunctions={props.availableFunctions}
          />
          {(props.param?.value as ParsedQuery)?.Functions?.map((f, i) => <FunctionQueryUI key={f.Function}
            update={(f) => onFunctionChange(f, i)}
            func={f} availableFunctions={props.availableFunctions}
            availableTables={props.availableTables}
            datasource={props.datasource}
          />)}
          {(props.param?.value as ParsedQuery)?.Filters?.map((f, i) => <FilterQueryUI
            key={i}
            availableTables={props.availableTables}
            update={(f) => onFilterChange(f, i)} filter={f} />)}
        </> : null}
        {props.param.type.type === 'Double' ? <Input type={'number'}
          value={(props.param?.value as string) ?? '1.0'}
          onChange={onStringChange}
          width={20}
        /> : null}
        {props.param.type.type === 'String' ? <Input type={'text'}
          value={(props.param?.value as string) ?? ''}
          onChange={onStringChange}
          width={20}
        /> : null}
        {props.param.type.type === 'Int32' ? <Input type={'number'}
          min={0} max={99999}
          value={(props.param?.value as string) ?? '1'}
          onChange={onStringChange}
          width={20}
        /> : null}
        {props.param.type.type === 'AngleUnit' ? <Select
          value={(props.param?.value as string) ?? 'Degrees'}
          options={AngleOptions}
          onChange={onSelectChange}
          isSearchable
        /> : null}
        {props.param.type.type === 'TargetTimeUnit' ? <Select
          value={(props.param?.value as string) ?? 'Seconds'}
          options={TimeOption}
          onChange={onSelectChange}
          isSearchable
        /> : null}
        {props.param.type.type === 'Boolean' ? <Select
          value={(props.param?.value as string) ?? '1'}
          options={BooleanOption}
          onChange={onSelectChange}
          isSearchable
        /> : null}
      </>
    </Card.Description>
  </Card>;
};

const getCategory = (fxDescription: FunctionDescription | undefined): string => {
  return (fxDescription?.category ?? 'BuiltIn') === 'BuiltIn' ? 'Built-in' : 'Custom';
}

const getGroupOperation = (fxDescription: FunctionDescription | undefined): string => {
  const functionName = fxDescription?.name ?? '';

  if (functionName.startsWith('Slice')) {
    return ' slice';
  } else if (functionName.startsWith('Set')) {
    return ' set';
  }

  return '';
}

const extractGroupOperations = (fxDescription: FunctionDescription | undefined): string => {
  const allowedGroupOperations = fxDescription?.allowedGroupOperations.split(',').map(operation => operation.trim()) ?? [];
  let publishedGroupOperations = fxDescription?.publishedGroupOperations.split(',').map(operation => operation.trim()) ?? [];

  if (publishedGroupOperations.length === 0) {
    return '';
  }

  const allowedGroupOperationsSet = new Set(allowedGroupOperations);
  let functionName = fxDescription?.name ?? '';

  // If published group operations are not a subset of allowed group operations,
  // use the allowed group operations as the published group operations
  if (!publishedGroupOperations.every(element => allowedGroupOperationsSet.has(element))) {
    functionName = allowedGroupOperations[0];
    publishedGroupOperations = allowedGroupOperations;
  }

  const publishedGroupOperationsSet = new Set(publishedGroupOperations);
  const supportedGroupOperations: string[] = [];
  let supportsNonGroupedOperation = false;

  if (functionName.startsWith('Slice')) {
    // If slice-type function is selected, show possible support for 'None' and 'Set' group operations
    if (publishedGroupOperationsSet.has('None')) {
      supportsNonGroupedOperation = true;
    }

    if (publishedGroupOperationsSet.has('Set')) {
      supportedGroupOperations.push('set');
    }
  } else if (functionName.startsWith('Set')) {
    // If set-type function is selected, show possible support for 'None' and 'Slice' group operations
    if (publishedGroupOperationsSet.has('None')) {
      supportsNonGroupedOperation = true;
    }

    if (publishedGroupOperationsSet.has('Slice')) {
      supportedGroupOperations.push('slice');
    }
  }
  else {
    // If standard non-grouped function is selected, show possible support for 'Slice' and 'Set' group operations
    if (publishedGroupOperationsSet.has('Slice')) {
      supportedGroupOperations.push('slice');
    }

    if (publishedGroupOperationsSet.has('Set')) {
      supportedGroupOperations.push('set');
    }
  }

  if (!supportsNonGroupedOperation && supportedGroupOperations.length === 0) {
    return '';
  }

  const groupOperationsDisplay: string[] = [];

  if (supportsNonGroupedOperation) {
    groupOperationsDisplay.push('standard non-grouped');
  }

  if (supportedGroupOperations.length > 0) {
    if (groupOperationsDisplay.length > 0) {
      groupOperationsDisplay.push(' and ');
    }

    groupOperationsDisplay.push(supportedGroupOperations.join(' and '));
    groupOperationsDisplay.push(' group');

    if (supportedGroupOperations.length > 1) {
      groupOperationsDisplay.push('ed');
    }
  }

  groupOperationsDisplay.push(' operation');

  if ((supportsNonGroupedOperation ? 1 : 0) + supportedGroupOperations.length > 1) {
    groupOperationsDisplay.push('s');
  }

  return `, also supports ${groupOperationsDisplay.join('')}`;
}
