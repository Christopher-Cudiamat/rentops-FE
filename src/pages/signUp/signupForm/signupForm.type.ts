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
  pattern: any,
  minLength?: number,
  errorMessage: any,
  type?: string
}

interface IErrorMessage {
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