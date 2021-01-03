import { 
  SET_CONTACT_INFO,
  }
from "./propertyContact.type";


export const setPropertyContact = (data: any): any => {
  return {
    type: SET_CONTACT_INFO,
    data
  }
}


  