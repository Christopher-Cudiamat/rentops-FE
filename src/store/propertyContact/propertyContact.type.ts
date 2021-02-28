export const SET_CONTACT_INFO = "SET_CONTACT_INFO";

export interface IPropertyContact {
  lastName: string,
  firstName: string,
  email: string,
  phoneNumber: string | number ,
} 

export interface ISetPropertyContact {
  type: typeof SET_CONTACT_INFO,
  data: IPropertyContact,
}

export type IPropertyContactAction = ISetPropertyContact;