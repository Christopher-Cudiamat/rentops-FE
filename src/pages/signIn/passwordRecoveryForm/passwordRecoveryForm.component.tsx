import React, { useState } from 'react';
import ChangePasswordForm from './changePasswordForm/changePasswordForm.component';
import IdentificationForm from './identificationForm/identificationForm.component';
import OtpForm from './otpForm/otpForm.component';
import { recoverPasswordSteps } from './passwordRecoveryForm.config';
import { IPasswordRecoveryFormProps } from './passwordRecoveryForm.type';

const PasswordRecoveryForm: React.FC<IPasswordRecoveryFormProps> = ({
  setForm
  }) => {

  const [step,setStep] = useState(recoverPasswordSteps.identification);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [email, setEmail] = useState("");

  const handleStep = (step: number) => {
    switch(step) {
      case recoverPasswordSteps.otp:
        return  <OtpForm 
                  setStep={setStep}
                  generatedOtp={generatedOtp}/>
      case recoverPasswordSteps.changePassword:
        return  <ChangePasswordForm 
                  email={email}
                  setForm={setForm}/>
      default:
        return  <IdentificationForm 
                  setGeneratedOtp={setGeneratedOtp}        
                  setStep={setStep}
                  setEmail={setEmail}/> 
    }
  }

  return (
    <>
      {handleStep(step)}
    </>
  );
}

export default PasswordRecoveryForm;


