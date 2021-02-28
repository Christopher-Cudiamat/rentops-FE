import { IPropertyContact } from "../propertyContact/propertyContact.type";
import { IPropertyInfoState } from "../propertyInfo/propertyInfo.type";
import { IPropertyMedia } from "../propertyMedia/propertyMedia.type";

export const SET_PROPERTY_LIST = "SET_PROPERTY_LIST";
export const RESET_PROPERTY_LIST= "RESET_PROPERTY_INFO";


export interface IPropertyListState {
  dataLength: number,
  properties: IPropertyList[] | []
}

export interface IPropertyList {
  createdAt: string,
  likes: [],
  propertyContact: IPropertyContact,
  propertyInfo: IPropertyInfoState,
  propertyMedia: IPropertyMedia,
  updatedAt: string,
  user: string,
  __v: number,
  _id: string
}

export interface ISetPropertyListAction {
  type: typeof SET_PROPERTY_LIST,
  dataLength: number,
  properties: IPropertyList[]
}

export interface IResetPropertyListACtion {
  type: typeof RESET_PROPERTY_LIST
}

export type IPropertyListAction = 
ISetPropertyListAction |
IResetPropertyListACtion ;