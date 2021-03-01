import { IPropertyInfoState } from '../../../store/propertyInfo/propertyInfo.type';

export interface IProperyInfoFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  setAddPropertyInfo: () => void,
  propertyInfo: IPropertyInfoState
} 