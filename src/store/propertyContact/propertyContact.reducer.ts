import { 
  SET_CONTACT_INFO,
  }
from "./propertyContact.type";


const initialState: any = {
  lastName: "",
  firstName: "",
  email: 0,
  phoneNumber: 0,
} 

export const propertyContactReducer = (state = initialState, action: any) => {
  const {type,data} = action;

  switch(type) {
    case  SET_CONTACT_INFO:
      return {
        ...state,
        ...data
      }
    default:
      return state;
  }
}