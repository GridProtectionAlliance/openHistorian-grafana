import React from 'react';
import {  InlineField, AsyncMultiSelect, Select, Input, InlineFieldRow, Collapse, Card, IconButton } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { DataSource } from '../datasource';
import { FilterQuery, FunctionQuery, IFunction, ParameterType, ParsedQuery, QueryBase} from '../types';
import "../css/query-editor.css";
import { getBackendSrv } from "@grafana/runtime";
import _ from 'lodash';
import { GenerateDefaultValue } from '../js/Utilities'

interface Props {onChange: (value: QueryBase) => void, query: QueryBase, datasource: DataSource, includeFunctions?: boolean }

export const QueryEditorWizard = (props: Props) => {
  const [elements, setElements] = React.useState<string[]>(props.query.parsedQuery?.Elements ?? []);
  const [functions, setFunctions] = React.useState<FunctionQuery[]>(props.query.parsedQuery?.Functions ?? []);
  const [availableFunctions, setAvailableFunctions] = React.useState<IFunction[]>([]);
  const [tableOptions, setTableOptions] = React.useState<string[]>([]);
  const [filters, setFilters] = React.useState<FilterQuery[]>(props.query.parsedQuery?.Filters ?? []);

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/getfunctions").then((d) => {
      if (props.includeFunctions === undefined || props.includeFunctions) {
        setAvailableFunctions(d);
      }
    });
  }, [props.datasource.url, props.includeFunctions])

  React.useEffect(() => {
    getBackendSrv().post(props.datasource.url + "/gettableoptions", props.datasource.isPhasor)
      .then((d: string[]) => { setTableOptions(d); })
  }, [props.datasource.isPhasor, props.datasource.url])


  function onElementChange(e: string[], fx: string|undefined, filter: boolean) {
    setElements(e);
    if (fx !== undefined) {
      setFunctions(f => { let u = _.clone(f); u.push({
        Function: fx,
        Parameters: availableFunctions.find(f => f.Name === fx)?.Parameters.map(p => ({type: p, value: GenerateDefaultValue(p)} as ParameterType)) ?? [],
      }); return u;})
    }
    const u = {...props.query};
    if (u.parsedQuery === undefined) {
      u.parsedQuery = {Elements: [], Functions: [], Filters: []}
    }
    u.parsedQuery.Elements = e;
    if (filter) {
      u.parsedQuery.Filters.push({Table: '', Condition: '', Number: 10, NumberMode: 'Top'});
      setFilters(u.parsedQuery.Filters);
    }
    props.onChange(u);
  }
 
  function onFilterChange(f: FilterQuery|undefined, index: number) {
    const u = {...props.query};
    if (u.parsedQuery === undefined) {
      u.parsedQuery = {Elements: [], Functions: [], Filters: []}
    }
    if (f === undefined) {
      u.parsedQuery.Filters.splice(index,1);
    }
    else {
      u.parsedQuery.Filters[index] = f;
    }
    setFilters(u.parsedQuery.Filters);
    props.onChange(u);
  }

  function onFunctionChange(f: FunctionQuery|undefined, index: number) {
    const u = {...props.query};
    if (u.parsedQuery === undefined) {
      u.parsedQuery = {Elements: [], Functions: [], Filters: []}
    }
    if (f === undefined) {
      u.parsedQuery.Functions.splice(index,1);
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
    {functions?.map((f,i) => <FunctionQueryUI key={f.Function}
      update={(f) => onFunctionChange(f,i)}
      func={f} availableFunctions={availableFunctions} 
      availableTables={tableOptions}
      datasource={props.datasource}    
    />)}
    {filters?.map((f,i) => <FilterQueryUI
      key={i} 
      availableTables={tableOptions}
      update={(f) => onFilterChange(f,i)} filter={f}/>)}
</div>;
}

interface ElementQueryProps { 
  datasource: DataSource,
  update: (elements: string[], fx: string|undefined, filter: boolean) => void,
  elements: string[],
  availableFunctions: IFunction[]
}

export const ElementQuery = (props: ElementQueryProps) => {
  const selectedOptions = React.useMemo(() => props.elements.map((d) => ({value: d, label: d})),[props.elements]);

  const loadOptions = async (inputValue: string) => {
    const d = await getBackendSrv().post(props.datasource.url + "/search", {
      target: inputValue, 
      isPhasor: props.datasource.isPhasor
    });
    const r: any[] = d.map((p: string) => ({value: p, label: p}));
    if ('filter'.includes(inputValue.toLocaleLowerCase())) {
      r.push({value: 'FILTER', label: 'FILTER'});
    }
    props.availableFunctions.filter((f) => f.Name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
      .forEach((f) => {
      r.push({label: f.Name, value: 'fx-' + f.Name})
    })
    return r;
  };

  const onElementsChange = (selected: Array<SelectableValue<string>>) => {
    const selectedValues = selected.map((item) => item.value) as string[];
    let hasFilter = selectedValues.includes('FILTER');
    const fx = selectedValues.filter(s => s.startsWith('fx-'));
    let func: string|undefined = undefined;
    if (fx.length > 0) {
      func = fx[0].substring(3);
    }

    props.update(selectedValues.filter(i => i !== 'FILTER' && !i.startsWith('fx-')),func,hasFilter);
  };


  return <InlineField label="Query" labelWidth={12}>
    <AsyncMultiSelect
      loadOptions={loadOptions}
      defaultOptions
      value={selectedOptions}
      onChange={onElementsChange}
      isSearchable
    />
  </InlineField>
}

interface FilterQueryProps { 
  update: (filter: FilterQuery|undefined) => void,
  filter: FilterQuery,
  availableTables: string[]
}

const FilterQueryUI = (props: FilterQueryProps ) => {
  const numberOptions = [
    {label: 'TOP', value: 'Top'}, 
    {label: 'ALL', value: ''}]

  const tableOptions: Array<SelectableValue<string>> = React.useMemo(() => props.availableTables.map((t) => ({label: t, value: t})), [props.availableTables])
  const selectedOptions: Array<SelectableValue<string>> = React.useMemo(() => props.filter.Table === ''? [] : [{value: props.filter.Table, label: props.filter.Table}],[props.filter.Table]);

  function onNumberModeChange(val: SelectableValue<string>) {
    props.update({...props.filter, NumberMode: val.value as ('Top'|'')})
  }

  function OnNumberChange(val: any) {
    const n = val.target.value;
    props.update({...props.filter, Number: parseInt(n,10)})
  }

  function onTableChange(t: SelectableValue<string>) {
    props.update({...props.filter, Table: t.value ?? ''})
  }

  function onConditionChange(val: any) {
    props.update({...props.filter, Condition: val.target.value})
  }


  return <InlineFieldRow>
  <IconButton name={'trash-alt'} size='xl' iconType='default' variant='destructive' onClick={() => props.update(undefined)}  />
  <InlineField label="Filter" labelWidth={12}>
    <Select  
    value={props.filter.NumberMode}
    options={numberOptions}
    onChange={onNumberModeChange}
    />
  </InlineField>
  {props.filter.NumberMode !== ''? <Input type={'number'}
    min={0} max={99999}
    value={props.filter.Number}
    onChange={OnNumberChange}
    width={20}
    /> : null}
    <Select  
      value={selectedOptions}
      options={tableOptions}
      onChange={onTableChange}
      isSearchable
      width={80}
    />
  <InlineField label="WHERE" labelWidth={12}>
    <Input  
    value={props.filter.Condition}
    onChange={onConditionChange}
    />
  </InlineField>
  </InlineFieldRow>

}

interface FunctionQueryProps {
  update: (func: FunctionQuery|undefined) => void,
  func: FunctionQuery,
  availableFunctions: IFunction[],
  availableTables: string[],
  datasource: DataSource
}


const FunctionQueryUI = (props: FunctionQueryProps ) => {
  const [isOpen,setIsOpen] = React.useState<boolean>(true);
  const fxDescription = React.useMemo(() => props.availableFunctions.find(f => f.Name === props.func.Function),[props.func,props.availableFunctions]);
  const fxOptions = React.useMemo(() => props.availableFunctions.map((f) => ({value: f.Name, label: f.Name})),[props.availableFunctions])

  function onFunctionChange(val: SelectableValue<string>) {
    const fx = props.availableFunctions.find(f => f.Name === val.value)
    if (fx === null) {
      return
    }
    props.update({Function: val.value ?? 'AbsoluteValue', Parameters: fx?.Parameters.map((p) => {
      const param: ParameterType = { type: p, value: GenerateDefaultValue(p)};
      return param;
    }) ?? []});

    setIsOpen(true); 
  }
  
  function onValueChange(val: ParameterType, index: number) {
    const u = _.cloneDeep(props.func);
    u.Parameters[index] = val;
    props.update(u);
  }

  return <Collapse label={
    <InlineFieldRow>
      <IconButton name={'trash-alt'} size='xl' iconType='default' variant='destructive' onClick={() => props.update(undefined)}  />
      <Select  
        value={props.func.Function}
        options={fxOptions}
        onChange={onFunctionChange}
        isSearchable
        width={20}
        />
    </InlineFieldRow>
  } isOpen={isOpen} onToggle={() => setIsOpen((x) => !x)}>
    <p>{fxDescription?.Description}</p>
    <ul>
        {props.func.Parameters.map((p,i) => <li key={p.type.Description}>
          <ParameterUI update={(val) => onValueChange(val,i)} 
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
  availableFunctions: IFunction[],
  availableTables: string[],
  datasource: DataSource,
}
const ParameterUI = (props: ParameterQueryProps) => {

  const AngleOptions: Array<SelectableValue<string>> = [ {value: 'Radians', label: 'Radians'},{value: 'Degrees', label: 'Degrees'}
  ,{value: 'Grads', label: 'Grads'},{value: 'ArcMinutes', label: 'ArcMinutes'}, 
  {value: 'ArcSeconds', label: 'ArcSeconds'},{value: 'AngularMil', label: 'AngularMil'}];

  const TimeOption = [
    {value: 'Seconds', label: 'Seconds'},
    {value: 'Nanoseconds', label: 'Nanoseconds'},
    {value: 'Microseconds', label: 'Microseconds'},
    {value: 'Milliseconds', label: 'Milliseconds'},
    {value: 'Minutes', label: 'Minutes'},
    {value: 'Hours', label: 'Hours'},
    {value: 'Days', label: 'Days'},
    {value: 'Weeks', label: 'Weeks'},
    {value: 'Ke', label: 'Ke (traditional Chinese)'},
    {value: 'Ticks', label: 'Ticks'},
    {value: 'PlanckTime', label: 'PlanckTime'},
    {value: 'AtomicUnitsOfTime', label: 'AtomicUnitsOfTime'}];

  const BooleanOption = [ {value: '1', label: 'True'}, {value: '0', label: 'False'},]

  function onElementChange(e: string[], fx: string|undefined, filter: boolean) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = {type: props.param.type, value: {Elements: [], Functions: [], Filters: []}}
    }
    if (fx !== undefined) {
      (u.value as ParsedQuery)?.Functions.push({
        Function: fx,
        Parameters: [],
      })
    }
    
    (u.value as ParsedQuery).Elements = e;
    if (filter) {
      (u.value as ParsedQuery)?.Filters.push({Table: '', Condition: '', Number: 10, NumberMode: 'Top'});
    }
    props.update(u);
  }
 
  function onFilterChange(f: FilterQuery|undefined, index: number) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = {type: props.param.type, value: {Elements: [], Functions: [], Filters: []}}
    }
    if (f === undefined) {
      (u.value as ParsedQuery)?.Filters.splice(index,1)
    } else {
      (u.value as ParsedQuery).Filters[index] = f;
    }
    props.update(u);
  }

  function onFunctionChange(f: FunctionQuery|undefined, index: number) {
    let u = _.cloneDeep(props.param) as ParameterType;
    if (u === undefined) {
      u = {type: props.param.type, value: {Elements: [], Functions: [], Filters: []}}
    }
    if (f === undefined) {
      (u.value as ParsedQuery)?.Functions.splice(index,1);
    } else {
      (u.value as ParsedQuery).Functions[index] = f;
    }
    props.update(u);
  }

  function onStringChange(val: any) {
    props.update({type: props.param.type, value: val.target.value})
  }

  function onSelectChange(val: SelectableValue<string>) {
    props.update({type: props.param.type, value: val.value as string})
  }

  return  <Card>
  <Card.Heading>{props.param.type.Description}</Card.Heading>
  <Card.Description>
    {props.param.type.ParameterTypeName === "IDataSourceValueGroup"? <>
      <ElementQuery 
        datasource={props.datasource} 
        elements={(props.param?.value as ParsedQuery)?.Elements ?? []} 
        update={onElementChange} 
        availableFunctions={props.availableFunctions}
      />
    {(props.param?.value as ParsedQuery)?.Functions?.map((f,i) => <FunctionQueryUI key={f.Function}
      update={(f) => onFunctionChange(f,i)}
      func={f} availableFunctions={props.availableFunctions} 
      availableTables={props.availableTables}
      datasource={props.datasource}    
    />)}
    {(props.param?.value as ParsedQuery)?.Filters?.map((f,i) => <FilterQueryUI
      key={i} 
      availableTables={props.availableTables}
      update={(f) => onFilterChange(f,i)} filter={f}/>)}
      </> : null}
    {props.param.type.ParameterTypeName === 'Double'?  <Input type={'number'}
    value={(props.param?.value as string) ?? '1.0'}
    onChange={onStringChange}
    width={20}
    /> : null}
    {props.param.type.ParameterTypeName === 'String'?  <Input type={'text'}
    value={(props.param?.value as string) ?? ''}
    onChange={onStringChange}
    width={20}
    /> : null}
    {props.param.type.ParameterTypeName === 'int'?  <Input type={'number'}
    min={0} max={99999}
    value={(props.param?.value as string) ?? '1'}
    onChange={onStringChange}
    width={20}
    /> : null}
    {props.param.type.ParameterTypeName === 'AngleUnit'?  <Select 
    value={(props.param?.value as string) ?? 'Degrees'}
    options={AngleOptions}
    onChange={onSelectChange}
    isSearchable
    /> : null}
     {props.param.type.ParameterTypeName === 'TargetTimeUnit'?  <Select 
    value={(props.param?.value as string) ?? 'Seconds'}
    options={TimeOption}
    onChange={onSelectChange}
    isSearchable
    /> : null}
     {props.param.type.ParameterTypeName === 'Boolean'?  <Select 
    value={(props.param?.value as string) ?? '1'}
    options={BooleanOption}
    onChange={onSelectChange}
    isSearchable
    /> : null}
  </Card.Description>
</Card>;
}
