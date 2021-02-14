import { IUserAuthState } from '../../../store/userAuth/userAuth.type';

export interface IPropertyContactFormProps {
  UserAuth: IUserAuthState | any,
  setContactInfo: (data: IPropertyContactData) => void,
  setStep: React.Dispatch<React.SetStateAction<number>>, 
}

export interface IPropertyContactData {
  lastName: string,
  firstName: string,
  email: string,
  phoneNumber: string
}

export interface IContactFormArr {
  label: string,
  name:  string,
  placeholder:  string,
  defaultValue:  string,
  required: string | boolean | ValidationValueMessage<boolean> | undefined,
  pattern: RegExp | ValidationValueMessage<RegExp> | undefined,
  minLength: string | number | ValidationValueMessage<React.ReactText> | undefined,
  errorMessage: any,
}