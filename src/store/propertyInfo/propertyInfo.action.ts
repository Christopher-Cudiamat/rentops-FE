import { 
  ADD_TO_ARRAY,
  REMOVE_FROM_ARRAY,
  RESET_PROPERTY_INFO,
  SET_PROPERTY_INFO,
  SET_ADD_PROPERTY_INFO,
  SET_FILTER_PROPERTY_INFO,
  IRangeObj,
  IResetPropertyInfo,
  ISetFilterPropertyInfo,
  ISetAddPropertyInfo,
  IRemoveAmenities,
  IAddAmenities,
  ISetPropertyInfo
} from "./propertyInfo.type"


export const setPropertyInfo = (
    name: string,
   value: string | number | IRangeObj
): ISetPropertyInfo => {
  return {
    type: SET_PROPERTY_INFO,
    name,
    value
  }
}

export const addAmenities = (name: string, value: string): IAddAmenities => {
  return {
    type: ADD_TO_ARRAY,
    name,
    value
  }
}

export const removeAmenities = (name: string, value: string): IRemoveAmenities => {
  return {
    type: REMOVE_FROM_ARRAY,
    name,
    value
  }
}

export const setAddPropertyInfo = (): ISetAddPropertyInfo => {
  return {
    type: SET_ADD_PROPERTY_INFO
  }
}

export const setFilterPropertyInfo = (): ISetFilterPropertyInfo => {
  return {
    type: SET_FILTER_PROPERTY_INFO
  }
}

export const resetPropertyInfo = (): IResetPropertyInfo => {
  return {
    type: RESET_PROPERTY_INFO
  }
}


