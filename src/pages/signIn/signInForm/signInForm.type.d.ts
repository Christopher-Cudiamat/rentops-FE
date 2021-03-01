import { IUserAuthState } from "../../../store/userAuth/userAuth.type";

export interface ISignInFormProps {
  setForm: React.Dispatch<React.SetStateAction<number>>
  login: (data:IUserAuthState) => void,
  setPage: (name: string, value: boolean) => void
}

export interface ISignInFormArr {
  defaultValue: string,
  errorMessage: {
    [key:string]: string,
    required: string
  },
  label:  string,
  name:  string,
  placeholder:  string,
  required: boolean,
  type?:  string,
}

export interface IDataSignIn {
  email: string,
  password: string
}