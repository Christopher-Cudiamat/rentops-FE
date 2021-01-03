import { 
  ADD_TO_ARRAY,
  REMOVE_FROM_ARRAY,
  RESET_PROPERTY_INFO,
  SET_PROPERTY_INFO,
  }
from "./propertyInfo.type";


const initialState: any = {
  location: "Makati City",
  price: 1000,
  size: 0,
  contractLength: "Long-term",
  propertyType: "Apartment",
  furnish: "",
  bed: "1",
  bathroom: "1",
  developer: "none",
  amenities: []
} 

export const propertyInfoReducer = (state = initialState, action: any) => {
  const {type,name,value} = action;

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
      [name] : state[name].filter((el: string) => el !== value)
    }
    case RESET_PROPERTY_INFO:
      return {
        location: "Makati City",
        price: 1000,
        size: 0,
        contractLength: "Long-term",
        furnish: "",
        bed: "1",
        bathroom: "1",
        developer: "none",
        amenities: []
      }
    default:
      return state;
  }
}