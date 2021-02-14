export const SET_PROPERTY_INFO = "SET_PROPERTY_INFO";
export const RESET_PROPERTY_INFO = "RESET_PROPERTY_INFO";
export const ADD_TO_ARRAY = "ADD_TO_ARRAY";
export const REMOVE_FROM_ARRAY = "REMOVE_FROM_ARRAY";
export const SET_ADD_PROPERTY_INFO = "SET_ADD_PROPERTY_INFO";
export const SET_FILTER_PROPERTY_INFO = "SET_FILTER_PROPERTY_INFO";



export interface IPropertyInfoState {
  location: string,
  latitude: string,
  longitude: string,
  description: string,
  price?: number,
  size?: number,
  propertyType: string,
  contractLength: string,
  furnish: string,
  bed: string,
  bathroom: string,
  developer: string,
  amenities: any[],
  priceRange?: {min: string, max: string},
  sizeRange?: {min: string, max: string},
}