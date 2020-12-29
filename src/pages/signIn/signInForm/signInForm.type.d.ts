import { IUserAuthState } from "../../../store/userAuth/userAuth.type";

export interface ISignInFormProps {
  setForm: React.Dispatch<React.SetStateAction<number>>
  login: (data:IUserAuthState) => void
}