export interface ISignupFormProps {
  setForm: React.Dispatch<React.SetStateAction<string>>,
  setUserData: React.Dispatch<React.SetStateAction<{
    token: string;
    message: string;
  }>>
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