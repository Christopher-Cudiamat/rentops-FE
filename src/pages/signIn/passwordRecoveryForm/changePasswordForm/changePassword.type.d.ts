export interface IChangePasswordProps {
  email: string,
  setForm: React.Dispatch<React.SetStateAction<number>>
}

export interface IChangePasswordArr {
  label: string,
  name: string,
  placeholder: string,
  defaultValue: string,
  required: boolean,
  pattern: RegExp | ValidationValueMessage<RegExp> | undefined,
  minLength: string | number | ValidationValueMessage<React.ReactText> | undefined,
  errorMessage: any,
  type: string
}

export interface IChangePasswordData {
  newPassword: string,
  confirmNewPassword: string
}