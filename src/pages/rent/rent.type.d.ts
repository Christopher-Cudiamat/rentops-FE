import { 
  IPropertyList,
  IPropertyInfoState
} from "../../store/propertyList/propertyList.type";
export interface IRentProps {
  data: IProperties,
  propertyInfo: IPropertyInfoState
  setPropertyList: (dataLength: number, properties: IPropertyList[]) => void,
  resetPropertyInfo: () => void
}

interface IProperties {
  properties: IPropertyList[],
  dataLength: number
}