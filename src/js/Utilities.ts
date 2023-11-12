import { IFunctionParameter, ParsedQuery } from "../types";

export function GenerateDefaultValue(param: IFunctionParameter) {
    if (param.ParameterTypeName === 'IDataSourceValueGroup') {
        return { Elements: [], Functions: [], Filters: []} as ParsedQuery;
      }
      if (param.ParameterTypeName === 'Double' || param.ParameterTypeName === 'int') {
        return "1";
      }
      if (param.ParameterTypeName === 'Boolean') {
        return "1";
      }
      if (param.ParameterTypeName === 'AngleUnit') {
        return "Degrees";
      }
      if (param.ParameterTypeName === 'TargetTimeUnit') {
       return "Seconds";
      }
      return "";
}
