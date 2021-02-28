import { IPropertyList } from "../../store/propertyList/propertyList.type";
export interface IRentProps {
  data: IProperties,
  propertyInfo: any
  setPropertyList: (dataLength: number, properties: IPropertyList[]) => void,
  resetPropertyInfo: () => void
}

interface IProperties {
  properties: any[],
  dataLength: number
}