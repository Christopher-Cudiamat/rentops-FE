import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthButton from '../../../../components/authButton/authButton.container';
import { Input, InputControl, InputError, InputLabel } from '../../../../components/ui/input.style';
import { otpVerification } from '../../../../services/signinController';
import { recoverPasswordSteps } from '../passwordRecoveryForm.config';
import { FormControl } from '../passwordRecoveryForm.style';
import { IOtpFormProps } from './otpForm.type';


const OtpForm: React.FC<IOtpFormProps> = ({setStep,generatedOtp}) => {
  
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");

	const onSubmit = (data:any) => {
    otpVerification(generatedOtp,data.otp)
    .then(() => setStep(recoverPasswordSteps.changePassword))
    .catch(err => setError(err.response.data.error));
  }
  
  return (
    <FormControl  onSubmit={handleSubmit(onSubmit)}>
      <InputControl>
        <InputLabel>Insert OTP</InputLabel>
        <Input
          placeholder={"One Time Password"}
          name={"otp"} 
          defaultValue={""}
          ref={register({
            required: true,
          })}/>
        <InputError visibility={errors.otp?.type}>Please Insert your OTP</InputError>
      </InputControl>
      <AuthButton error={error}>
				Continue
			</AuthButton>	
		</FormControl>
  );
}

export default OtpForm;
