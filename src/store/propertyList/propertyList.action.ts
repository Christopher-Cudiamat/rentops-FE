import { 
  RESET_PROPERTY_LIST,
   SET_PROPERTY_LIST 
} from "./propertyList.type";

export const setPropertyList = (value:any): any => {
  return {
    type: SET_PROPERTY_LIST,
    value
  }
}

export const resetPropertyList = (): any => {
  return {
    type: RESET_PROPERTY_LIST,
  }
}
