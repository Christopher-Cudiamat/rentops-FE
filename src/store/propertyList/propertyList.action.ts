import { 
  IPropertyList,
  IResetPropertyListACtion,
  ISetPropertyListAction,
  RESET_PROPERTY_LIST,
   SET_PROPERTY_LIST 
} from "./propertyList.type";

export const setPropertyList = (
  dataLength: number,
  properties: IPropertyList[]
): ISetPropertyListAction => {
  return {
    type: SET_PROPERTY_LIST,
    dataLength,
    properties
  }
}

export const resetPropertyList = (): IResetPropertyListACtion => {
  return {
    type: RESET_PROPERTY_LIST
  }
}
