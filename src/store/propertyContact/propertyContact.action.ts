import { 
  IPropertyContact,
  ISetPropertyContact,
  SET_CONTACT_INFO 
} from "./propertyContact.type";


export const setPropertyContact = (data: IPropertyContact): ISetPropertyContact => {
  return {
    type: SET_CONTACT_INFO,
    data
  }
}


  