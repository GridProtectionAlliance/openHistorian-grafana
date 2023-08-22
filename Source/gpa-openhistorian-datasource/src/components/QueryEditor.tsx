import React, { useState, useEffect } from 'react';
import { InlineFieldRow, InlineField, Select, AsyncMultiSelect, TextArea, MultiSelect } from '@grafana/ui';
import { SelectableValue, QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery, FunctionParameter, FunctionData } from '../types';
import { SelectOptions, Booleans, AngleUnits, TimeUnits, DefaultTimeUnits } from '../js/constants'
import "../css/query-editor.css";

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;


export function QueryEditor({ query, onChange, onRunQuery, datasource }: Props) {
  const [datasourceLoading, setDatasourceLoading] = useState(datasource.loading);
  const [queryLoading, setQueryLoading] = useState(datasource.loading);
  const [tableOptions, setTableOptions] = useState<Array<SelectableValue<string>>>();

  //Only runs on page loading - prevents repetitive api calls
  useEffect(() => {
    const fetchData = async () => {
      //Variables
      query.elements = []
      query.queryType = "Element List"
      query.queryText = ""
      query.metadataOptions = {}
      query.functions = []
      query.functionsData = {
        Name: "",
        Parameters: []
      }    
      setQueryLoading(false);  
      
      // Check loading status every 25 ms. Times out at 30 seconds
      const interval = setInterval(() => {
        if (!datasource.loading) {
          setDatasourceLoading(false);
          onRunQuery();
          onChange({ ...query });
          clearInterval(interval); // Clear the interval once loading is done
        }
      }, 25);

      const timeout = setTimeout(() => {
        clearInterval(interval); // Clear the interval after 30 seconds, regardless of loading status
      }, 30000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateFunctionData = (selectedFunctions: string[], functionIndex: number): FunctionData => {
    const functionName = selectedFunctions[functionIndex];
    const functionInfo = datasource.functionList[functionName];
    let params: FunctionParameter[] = []

    functionInfo.Parameters.forEach((parameter) => {
      if(parameter.ParameterTypeName === "data" && (functionIndex + 1) < selectedFunctions.length){
        params.push({
          Value: "",
          Type: parameter.ParameterTypeName,
          Sub: generateFunctionData(selectedFunctions, (functionIndex + 1))
        })
      }
      else if(parameter.ParameterTypeName === "time"){
        params.push({
          Value: DefaultTimeUnits[parameter.Default.Unit], 
          Type: parameter.ParameterTypeName,
          Sub: undefined,
        })
      }
      else if (parameter.ParameterTypeName === "angle"){
        params.push({
          Value: AngleUnits[parameter.Default], 
          Type: parameter.ParameterTypeName,
          Sub: undefined,
        })
      }
      else{
        params.push({
          Value: parameter.Default, 
          Type: parameter.ParameterTypeName,
          Sub: undefined,
        })
      }
    })

    let functionData: FunctionData = {
      Name: functionName,
      Parameters: params,
    }

    return functionData
  }

  const onSearchChange = (selected: SelectableValue<string>) => {
    // Convert between different modes
    if (selected.value === 'Text Editor') {
      //Convert
      query.queryText = datasource.targetToString(query);

      //Remove
      query.elements = [];
      query.functions = [];
      query.functionsData = {
        Name: "",
        Parameters: []
      }
    } else if (selected.value === 'Element List') {
      //Remove 
      query.queryText = '';
      query.functions = [];
      query.functionsData = {
        Name: "",
        Parameters: []
      }
    } else if (selected.value === 'Functions') {
      //Remove
      query.queryText = '';
      query.elements = [];
    }

    query.queryType = selected.value as string
    if (selected) {
      onChange({ ...query, queryType: selected.value! });
    }

    onRunQuery();
  };

  const onElementsChange = (selected: Array<SelectableValue<string>>) => {
    const selectedValues = selected.map((item) => item.value) as string[];
    onChange({ ...query, elements: selectedValues });
    onRunQuery();
  };

  const onTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    onChange({ ...query, queryText: value });
  };

  const updateFunctionData = (newValue: string, parameterPathIndex: number[]) => {
    let currentData = query.functionsData.Parameters[parameterPathIndex[0]];

    for (let i = 1; i < parameterPathIndex.length; i++) {
      const index = parameterPathIndex[i];
      currentData = currentData.Sub!.Parameters[index];
    }

    currentData.Value = newValue;
  
    // Update the query object with the modified functionsData
    onChange({ ...query, functionsData: query.functionsData });
  };

  const onFunctionSelectorChange = (selected: Array<SelectableValue<string>>) => {
    const selectedFunctions = selected.map((item) => item.value) as string[];
    onChange({ ...query, functions: selectedFunctions });

    // Build function structure
    let data: FunctionData; 
    if(selectedFunctions.length === 0){
      data = {
        Name: "",
        Parameters: [],
      };
    }
    else {
      data = generateFunctionData(selectedFunctions, 0);
    }

    onChange({ ...query, functions: selectedFunctions, functionsData: data });
  };

  const validateTextBoxChange = (event: React.ChangeEvent<HTMLInputElement>, name: string, type: string, index: number) => {
    let newValue = event.target.value;
    if(type === "int"){
      const parsedValue = parseInt(event.target.value, 10) 
      newValue = isNaN(parsedValue) ? datasource.functionList[name].Parameters[0].Default : parsedValue.toString()
    }
    else if(type === "double" || type === "float" || type === "decimal"){
      const lastCharacter = event.target.value.slice(-1);
      const parsedValue = parseFloat(event.target.value)  
      newValue = isNaN(parsedValue) ? datasource.functionList[name].Parameters[0].Default : parsedValue.toString()
      if (lastCharacter === ".") {
        newValue += "."
      }
    }

    return newValue
  }

  

  const onTableChange = async (selected: Array<SelectableValue<string>>) => {
    setTableOptions(selected);
    let newMetadataOptions: { [key: string]: string[] } = {};
  
    selected.forEach((item) => {
      if (item.value === undefined) {
        return;
      }
  
      const [tableName, target] = item.value.split(';');
  
      if (!newMetadataOptions.hasOwnProperty(tableName)) {
        newMetadataOptions[tableName] = [target];
      } else {
        newMetadataOptions[tableName].push(target);
      }
      

    });

    onChange({ ...query, metadataOptions: newMetadataOptions });
    onRunQuery();
  };
  

  const loadElementsOptions = async (inputValue: string) => {
    const asyncOptions = datasource.elementsList
      .filter((element: string) => element.toLowerCase().includes(inputValue.toLowerCase()))
      .map((element: string) => ({
        label: element,
        value: element,
      }));
    // Sort alphabetically
    asyncOptions.sort((a: { label: string; value: string }, b: { label: string; value: string }) =>
      a.label.localeCompare(b.label)
    );
    return asyncOptions;
  };

  const renderElements = () => {
    const elementsValue: Array<SelectableValue<string>> = query.elements
      ? query.elements.map((element) => ({
          label: element,
          value: element,
        }))
      : [];

    return (
      <div style={{ width: '100%' }}>
        <InlineField label="Elements" labelWidth={12}>
          <AsyncMultiSelect
            loadOptions={loadElementsOptions}
            defaultOptions
            value={elementsValue}
            onChange={onElementsChange}
            isSearchable
          />
        </InlineField>
      </div>
    );
  };

  const renderFunctionDropdownOptions = (type: string) => {
    // Determine options array based on type
    let options: string[] = [];
    if (type === 'boolean' || type === 'bool') {
      options = Booleans;
    } else if (type === 'time') {
      options = TimeUnits;
    } else if (type === 'angle') {
      options = AngleUnits;
    }
    else if (type === 'data') {
      options = datasource.elementsList ?? [];
    }


    return options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))
  }

  const renderFunctionSelector = () => {
    const sortedFunctionOptions = Object.entries(datasource.functionList)
      .map(([key, value]) => ({
        label: key,
        value: key,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  
    return (
      <InlineField label="Functions" labelWidth={12}>
        {/* Dropdown Selection */}
        <MultiSelect
          options={sortedFunctionOptions}
          value={query.functions.map((func) => ({
            label: func,
            value: func,
          }))}
          onChange={onFunctionSelectorChange}
          isSearchable
        />
      </InlineField>
    );
  };
  
  const renderFunctions = () => {
    if (query.functions.length === 0) {
      return renderFunctionSelector();
    }
  
    return (
      <div>
        <InlineFieldRow>
          {renderFunctionSelector()}
        </InlineFieldRow>
      </div>
    );

   
  };

  const renderFunctionDisplay = (functionData: FunctionData, parameterPathIndex: number[]): JSX.Element => {
    const sortedElementOptions: Array<{
      label: string;
      value: string;
    }> = Object.entries(datasource.elementsList)
      .map(([key, value]) => ({
        label: value,
        value: value,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
    
    const functionName = functionData.Name;
    return (
      <>
        <span style={{ margin: 0 }}>{functionName}</span>
        <span>(</span>
        {functionData.Parameters.map((param, paramIndex) => {
          const type = param.Type;
          const isLastParam = paramIndex === functionData.Parameters.length - 1;
          const newParameterPathIndex = [...parameterPathIndex, paramIndex];
          // No sub functions
          if (param.Sub === undefined) {
            return (
              <React.Fragment key={paramIndex}>
                {/* Typing Box */}
                {type === 'string' || type === 'double' || type === 'float' || type === 'decimal' || type === 'int' ? (
                  <input
                    type="text"
                    value={param.Value}
                    style={{ width: `${param.Value.toString().length * 8 + 25}px` }}
                    onChange={(event) => {
                      const newValue = validateTextBoxChange(event, functionName, type, paramIndex);
                      updateFunctionData(newValue, newParameterPathIndex);

                      const target = event.target as HTMLInputElement;
                      target.style.width = `${param.Value.toString().length * 8 + 25}px`;
                    }}
                  />
                ) : null}
  
                
                {/* Dropdown */}
                {type === 'boolean' || type === 'bool' || type === 'time' || type === 'angle' ? (
                  <select
                    value={param.Value}
                    onChange={(event) => {
                      updateFunctionData(event.target.value, newParameterPathIndex);
                    }}
                    className="auto-width"
                  >
                    {renderFunctionDropdownOptions(type)}
                  </select>
                ) : null}
  
                {/* Data */}
                {type === 'data' ? (
                  <MultiSelect
                    options={sortedElementOptions}
                    value={param.Value && typeof param.Value === 'string' ? param.Value.split(";").map((value) => ({ label: value, value })) : []}
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions.map((option) => option.value);
                      updateFunctionData(selectedValues.join(";"), newParameterPathIndex);
                    }}
                    className="auto-width"
                    isSearchable
                  />
                ) : null}
  
                {!isLastParam && <span>,</span>}
              </React.Fragment>
            );
          }
  
          // Have sub functions
          return (
            <>
              {renderFunctionDisplay(param.Sub, newParameterPathIndex)}
              {!isLastParam && <span>,</span>}
            </>
          );
        })}
        <span>)</span>
      </>
    );
  };
  

  const renderTextBox = () => {
    return (
      <div style={{ width: '100%' }}>
        <InlineField label="Text Editor" labelWidth={12}>
          <TextArea
            value={query.queryText}
            onChange={onTextInputChange}
            rows={10} 
            style={{ minWidth: '300px', width: '100%' }}
          />
        </InlineField>
      </div>
    );
  };

  const loadTableOptions = async (inputValue: string) => {
    const tableOptions = datasource.tablesList
    const metadataOptions = datasource.metadataList
  
    const asyncOptions = tableOptions
      .map((table: string) => {
        //Generate metadata options
        const metadataData = metadataOptions[table] as string[];
        const metadataElements = metadataData
          .filter((metadataElement: string) => metadataElement.toLowerCase().includes(inputValue.toLowerCase()))
          .map((metadataElement: string) => {
            return {
              label: metadataElement,
              value: table + ";"+ metadataElement,
            };
          });
  
        // Sort alphabetically
        metadataElements.sort((a, b) => a.label.localeCompare(b.label)); 
  
        return {
          label: table,
          value: table,
          options: metadataElements || [],
        };
      });
  
    asyncOptions.sort((a: { label: string; value: string }, b: { label: string; value: string }) =>
      a.label.localeCompare(b.label)
    );
  
    return asyncOptions;
  };

  return (
    <div className="gf-form" style={{ display: 'flex', flexDirection: 'column' }}>
      {(datasourceLoading || queryLoading) ? ( // Render a loading indicator while loading is true
        <h3>Loading...</h3> 
      ) : (
        <>
          <InlineField label="TYPE" labelWidth={12}>
            <Select options={SelectOptions} value={query.queryType} onChange={onSearchChange} allowCustomValue />
          </InlineField>
          {(query.queryType === 'Element List' || query.queryType === undefined) && renderElements() }
          {(query.queryType === 'Functions') && renderFunctions() }
          {query.queryType === 'Text Editor' && renderTextBox()}
  
          <InlineField label="Metadata" labelWidth={12}>
            <div>
              <AsyncMultiSelect
                loadOptions={loadTableOptions}
                defaultOptions
                value={tableOptions}
                onChange={onTableChange}
                isSearchable
              />
            </div>
          </InlineField>

          {
            (query.functions !== undefined && query.functions.length !== 0 && query.functionsData.Name !== "")
              ? <div className="dark-box" style={{ display: 'flex', alignItems: 'center' }}>
                  {renderFunctionDisplay(query.functionsData, [])}
                </div>
              : null
          }
        </>
      )}
    </div>
  );
  
}
