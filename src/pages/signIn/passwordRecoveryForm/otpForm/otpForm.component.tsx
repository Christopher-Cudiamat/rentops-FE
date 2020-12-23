import React from 'react';
import { useForm } from 'react-hook-form';
import { Div } from '../../../../components/ui/div';
import { Input, InputControl, InputError, InputLabel } from '../../../../components/ui/input.style';
import { recoverPasswordSteps } from '../passwordRecoveryForm.config';
import { ContinueButton, FormControl } from '../passwordRecoveryForm.style';
import { IOtpFormProps } from './otpForm.type';


const OtpForm: React.FC<IOtpFormProps> = ({setStep}) => {
  
  const { register, handleSubmit, errors } = useForm();

	// const [error, setError] = useState("");
	const onSubmit = (data:any) => {
    console.log(data)
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
			<Div display={"flex"} justify={"center"}>
        <ContinueButton 
          primary 
          type="submit"
          onClick={() => setStep(recoverPasswordSteps.changePassword)}>
					Continue
				</ContinueButton>
			</Div>
		</FormControl>
  );
}

export default OtpForm;
