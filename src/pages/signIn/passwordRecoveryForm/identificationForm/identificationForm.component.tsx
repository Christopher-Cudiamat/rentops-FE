import React from 'react';
import { useForm } from "react-hook-form";
import { Div } from '../../../../components/ui/div';
import { 
	Input,
	InputControl,
	InputError,
	InputLabel, 
} from '../../../../components/ui/input.style';
import { recoverPasswordSteps } from '../passwordRecoveryForm.config';
import { ContinueButton, FormControl } from '../passwordRecoveryForm.style';
import { IIdentificationFormProps } from './identificationForm.type';
import { identificationFormArr } from './identificatoinForm.config';


const IdentificationForm: React.FC<IIdentificationFormProps> = ({setStep}) => {

	const { register, handleSubmit, errors } = useForm();

	// const [error, setError] = useState("");
	const onSubmit = (data:any) => {
    console.log(data)
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

			<Div display={"flex"} justify={"center"}>
        <ContinueButton 
          primary 
          type="submit"
          onClick={() => setStep(recoverPasswordSteps.otp)}>
					Continue
				</ContinueButton>
			</Div>
				
		</FormControl>
	)
};

export default IdentificationForm;
