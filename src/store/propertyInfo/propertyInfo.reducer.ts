import { 
  ADD_TO_ARRAY,
  REMOVE_FROM_ARRAY,
  RESET_PROPERTY_INFO,
  SET_ADD_PROPERTY_INFO,
  SET_PROPERTY_INFO,
  SET_FILTER_PROPERTY_INFO,
  IPropertyInfoState,
  IPropertyInfoAction,
  IActionData,
  }
from "./propertyInfo.type";


const initialState: IPropertyInfoState = {
  location: "",
  latitude: "",
  longitude: "",
  description: "",
  price: 0,
  size: 0,
  propertyType: "",
  contractLength: "",
  furnish: "",
  bed: "",
  bathroom: "",
  developer: "",
  amenities: []
} 

export const propertyInfoReducer = (
  state = initialState,
  action: IPropertyInfoAction): IPropertyInfoState  => {
    
  const {type,name,value}: IActionData = action;

  switch(type) {
    case SET_PROPERTY_INFO:
      return {
        ...state,
        [name] : value
      }
    case ADD_TO_ARRAY:
    return {
      ...state,
      [name] : [...state.amenities, value] 
    }
    case REMOVE_FROM_ARRAY:
    return {
      ...state,
      [name] : state.amenities!.filter((el: string) => el !== value)
    }
    case RESET_PROPERTY_INFO:
      return {
        location: "",
        latitude: "",
        longitude: "",
        description: "",
        price: 0,
        size: 0,
        propertyType: "",
        contractLength: "",
        furnish: "",
        bed: "",
        bathroom: "",
        developer: "", 
        amenities: []
      }
    case SET_ADD_PROPERTY_INFO:
      return {
        location: "",
        latitude: "",
        longitude: "",
        description: "",
        price: 1000,
        size: 0,
        propertyType: "Apartment",
        contractLength: "Long-term",
        furnish: "",
        bed: "1",
        bathroom: "1",
        developer: "none",
        amenities: []
      }
    case SET_FILTER_PROPERTY_INFO:
      return {
        location: "",
        latitude: "",
        longitude: "",
        description: "",
        propertyType: [],
        priceRange: {min: "", max: ""},
        sizeRange: {min: "", max: ""},
        contractLength: [],
        furnish: [],
        bed: "",
        developer: "none",
        bathroom: "",
        amenities: []
      }
    default:
      return state;
  }
}