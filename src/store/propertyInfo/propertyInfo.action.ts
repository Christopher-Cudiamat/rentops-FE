import { 
  ADD_TO_ARRAY,
  REMOVE_FROM_ARRAY,
  RESET_PROPERTY_INFO,
  SET_PROPERTY_INFO,
} from "./propertyInfo.type"


export const setPropertyInfo = (name: string, value: string | number): any => {
  return {
    type: SET_PROPERTY_INFO,
    name,
    value
  }
}

export const addAmenities = (name: string, value: string): any => {
  return {
    type: ADD_TO_ARRAY,
    name,
    value
  }
}

export const removeAmenities = (name: string, value: string): any => {
  return {
    type: REMOVE_FROM_ARRAY,
    name,
    value
  }
}

export const resetPropertyInfo = (): any => {
  return {
    type: RESET_PROPERTY_INFO,
  }
}
