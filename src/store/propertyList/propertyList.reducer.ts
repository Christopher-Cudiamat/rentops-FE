import { 
  RESET_PROPERTY_LIST,
  SET_PROPERTY_LIST,
  }
from "./propertyList.type";


const initialState: any = []

export const propertyListReducer = (state = initialState, action: any) => {
  const {type,value} = action;

  switch(type) {
    case SET_PROPERTY_LIST:
      return value;
    case RESET_PROPERTY_LIST:
      return [];
    default:
      return state;
  }
}