import { IUserAuthState } from "../../../store/userAuth/userAuth.type";

export interface IEmailVerificationFormProps {
  userData: IUserData,
  setUserAuth: (data:IUserAuthState) => void
}

interface IUserData {
  token: string,
  message: string,
}

export interface IData {
  verificationCode: string
}