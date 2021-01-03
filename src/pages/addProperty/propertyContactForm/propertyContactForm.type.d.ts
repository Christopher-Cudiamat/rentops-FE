export interface IPropertyContactFormProps {
  UserAuth: any,
  setContactInfo: (data:any) => void,
  setStep: React.Dispatch<React.SetStateAction<number>>, 
}