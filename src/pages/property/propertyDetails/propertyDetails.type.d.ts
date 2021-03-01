import { IPropertyList } from '../../../store/propertyList/propertyList.type';
export interface IPropertyDetailsProps {
  data: IPropertyList,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}