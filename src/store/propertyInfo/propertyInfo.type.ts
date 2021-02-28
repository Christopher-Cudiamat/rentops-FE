export const SET_PROPERTY_INFO = "SET_PROPERTY_INFO";
export const RESET_PROPERTY_INFO = "RESET_PROPERTY_INFO";
export const ADD_TO_ARRAY = "ADD_TO_ARRAY";
export const REMOVE_FROM_ARRAY = "REMOVE_FROM_ARRAY";
export const SET_ADD_PROPERTY_INFO = "SET_ADD_PROPERTY_INFO";
export const SET_FILTER_PROPERTY_INFO = "SET_FILTER_PROPERTY_INFO";



export interface IPropertyInfoState {
  [key:string]: string | number | IRangeObj | string[] | undefined ,
  location: string,
  latitude: string,
  longitude: string,
  description: string,
  price?: number,
  size?: number,
  propertyType: string | string[],
  contractLength: string | string[],
  furnish: string | string[],
  bed: string,
  bathroom: string,
  developer: string,
  amenities: string[],
  priceRange?: IRangeObj,
  sizeRange?: IRangeObj,
}

export interface IRangeObj {
  min: string | number,
  max: string | number
}


export interface ISetPropertyInfo {
  type: typeof SET_PROPERTY_INFO,
  name: string,
  value: string | number |  IRangeObj
}

export interface IAddAmenities {
  type: typeof ADD_TO_ARRAY,
  name: string,
  value: string
}

export interface IRemoveAmenities {
  type: typeof REMOVE_FROM_ARRAY,
  name: string,
  value: string
}

export interface ISetAddPropertyInfo {
  type: typeof SET_ADD_PROPERTY_INFO
}

export interface ISetFilterPropertyInfo {
  type: typeof SET_FILTER_PROPERTY_INFO
}

export interface IResetPropertyInfo {
  type: typeof RESET_PROPERTY_INFO
}

export interface IActionData {
  type: string,
  name?: any,
  value?: string | number | IRangeObj | string[] | undefined
}

export type IPropertyInfoAction = 
  ISetPropertyInfo |
  IAddAmenities |
  IRemoveAmenities |
  ISetAddPropertyInfo |
  ISetFilterPropertyInfo |
  IResetPropertyInfo 
;
