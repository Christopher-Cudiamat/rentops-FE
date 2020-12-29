import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AuthButton from '../../../../components/authButton/authButton.container';
import { Div } from '../../../../components/ui/div';
import { 
	Input,
	InputControl,
	InputError,
	InputLabel, 
} from '../../../../components/ui/input.style';
import { sendOtp } from '../../../../services/signinController';
import { recoverPasswordSteps } from '../passwordRecoveryForm.config';
import { FormControl } from '../passwordRecoveryForm.style';
import { IIdentificationFormProps } from './identificationForm.type';
import { identificationFormArr } from './identificatoinForm.config';


const IdentificationForm: React.FC<IIdentificationFormProps> = ({
	setStep,
	setGeneratedOtp,
	setEmail
	}) => {

	const { register, handleSubmit, errors } = useForm();
	const [error, setError] = useState("");
	
	const onSubmit = (data:any) => {
	 sendOtp(data)
		.then(res => {
			setEmail(data.email);
			setGeneratedOtp(res.generatedOtp);
			if(res) setStep(recoverPasswordSteps.otp);
		})
		.catch (err => setError(err.response.data.error));
	}
	
	return(
		<FormControl  onSubmit={handleSubmit(onSubmit)}>
			{
				identificationFormArr.map((el: any,index: number) => 
					<InputControl key={index}>
						<InputLabel>{el.label}</InputLabel>
						<Input
							placeholder={el.placeholder}
							name={el.name} 
							defaultValue={el.defaultValue}
							ref={register({
								required: el.required,
								pattern: el.pattern,
								minLength: el.minLength
							})}/>
						<InputError visibility={errors[el.name]?.type}>
							{el.errorMessage[errors[el.name]?.type]}
						</InputError>
					</InputControl>
				)
			}
			<AuthButton error={error}>
				Continue
			</AuthButton>	
		</FormControl>
	)
};

export default IdentificationForm;
