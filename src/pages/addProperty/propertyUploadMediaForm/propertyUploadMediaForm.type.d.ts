import { IPropertyInfoState } from '../../../store/propertyInfo/propertyInfo.type';
import { IPropertyContact } from '../../../store/propertyContact/propertyContact.type';
import { IPropertyMedia } from '../../../store/propertyMedia/propertyMedia.type';

export interface IPropertyMediaProps {
  propertyInfo: IPropertyInfoState,
  propertyContact: IPropertyContact,
  propertyMedia: IPropertyMedia,
  resetPropertyMedia: () => void,
  setPage:  (name:string, value:boolean) => void
}