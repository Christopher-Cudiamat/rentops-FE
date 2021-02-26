export interface IRentProps {
  data: IProperties,
  propertyInfo: any
  setPropertyList: (data:any) => void,
  resetPropertyInfo: () => void
}

interface IProperties {
  properties: any[],
  dataLength: number
}