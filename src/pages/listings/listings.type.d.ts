import { IPropertyList } from "../../store/propertyList/propertyList.type";

export interface IListingsProps {
  properties: any,
  setPropertyList: (dataLength: number, properties: IPropertyList[]) => void,
}