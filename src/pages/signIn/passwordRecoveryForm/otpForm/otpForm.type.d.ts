export interface IOtpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  generatedOtp: string,
}

export interface IOtpData {
  otp: string
}