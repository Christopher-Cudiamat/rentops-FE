export interface IIdentificationFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  setGeneratedOtp: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
}


interface IErrorMessage {
  required?: string | number,
  pattern?: string | number
}
export interface IIdentificationArr {
    label:string,
    name: string,
    placeholder: string,
    defaultValue: string,
    required: boolean,
    pattern: RegExp,
    errorMessage: any
}

export interface IIdentificationData {
  firstName: string,
  lastName: string,
  email: string
}