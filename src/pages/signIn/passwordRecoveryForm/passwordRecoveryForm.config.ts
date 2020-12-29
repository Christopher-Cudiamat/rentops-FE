export enum recoverPasswordSteps {
  identification = 1,
  otp = 2,
  changePassword = 3 
}

export const stepperLabelsArr = [
  { label: 'Insert credentials' },
  { label: 'Confirm OTP' },
  { label: 'Reset password' }
]