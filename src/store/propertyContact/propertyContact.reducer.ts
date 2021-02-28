import { 
  IPropertyContact,
  IPropertyContactAction,
  SET_CONTACT_INFO,
  }
from "./propertyContact.type";


const initialState: IPropertyContact= {
  lastName: "",
  firstName: "",
  email: "",
  phoneNumber: "",
} 

export const propertyContactReducer = (
  state = initialState,
  action: IPropertyContactAction
) => {

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