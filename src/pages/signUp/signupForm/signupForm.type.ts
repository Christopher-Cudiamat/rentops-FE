export interface ISignupFormProps {
  setForm: React.Dispatch<React.SetStateAction<string>>,
  setUserData: React.Dispatch<React.SetStateAction<{
    token: string;
    message: string;
  }>>,
  setPage: (name: string, value: boolean) => void
}

export interface ISignupObj {
  label: string,
  name: string,
  placeholder: string,
  defaultValue: string,
  required: boolean,
  pattern?: RegExp,
  minLength?: number,
  errorMessage: IErrorMessage,
  type?: string
}

interface IErrorMessage {
  [key:string]: string | undefined,
  required: string,
  pattern: string,
  minLength?: string,
  validate?: string
}

export interface ISignupData {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  termsAndConditions: boolean
} 