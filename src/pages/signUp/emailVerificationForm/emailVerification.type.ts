export interface IEmailVerificationFormProps {
  userData: IUserData
}

interface IUserData {
  token: string,
  message: string,
}