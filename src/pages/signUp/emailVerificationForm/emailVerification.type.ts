export interface IEmailVerificationFormProps {
  setForm: React.Dispatch<React.SetStateAction<string>>,
  userData: IUserData
}

interface IUserData {
  token: string,
  message: string,
}