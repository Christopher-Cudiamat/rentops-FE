import React, { useState } from 'react';
import ChangePasswordForm from './changePasswordForm/changePasswordForm.component';
import IdentificationForm from './identificationForm/identificationForm.component';
import OtpForm from './otpForm/otpForm.component';
import { recoverPasswordSteps } from './passwordRecoveryForm.config';

const PasswordRecoveryForm: React.FC = () => {

  const [step,setStep] = useState(recoverPasswordSteps.identification);

  const handleStep = (step: number) => {
    switch(step) {
      case recoverPasswordSteps.otp:
        return <OtpForm setStep={setStep}/>
      case recoverPasswordSteps.changePassword:
        return <ChangePasswordForm/>
      default:
        return <IdentificationForm setStep={setStep}/> 
    }
  }

  return (
    <>
      {handleStep(step)}
    </>
  );
}

export default PasswordRecoveryForm;


