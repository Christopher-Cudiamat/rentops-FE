export interface ISignupFormProps {
  setForm: React.Dispatch<React.SetStateAction<string>>,
  setUserData: React.Dispatch<React.SetStateAction<{
    token: string;
    message: string;
  }>>
}