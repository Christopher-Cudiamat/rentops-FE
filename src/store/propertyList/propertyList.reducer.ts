import { 
  IPropertyListAction,
  IPropertyListState,
  RESET_PROPERTY_LIST,
  SET_PROPERTY_LIST,
  }
from "./propertyList.type";


const initialState: IPropertyListState = {
  dataLength: 0,
  properties: []
}

export const propertyListReducer = (
  state = initialState,
  action: IPropertyListAction
) => {

  //to resolve typing issue
  const { type, dataLength, properties }: any = action;
 
  switch(type) {
    case SET_PROPERTY_LIST:
      return {
        dataLength: dataLength,
        properties: properties
      };
    case RESET_PROPERTY_LIST:
      return {
        dataLength: 0,
        properties: []
      };
    default:
      return state;
  }
}