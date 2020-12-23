import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { 
	Input,
	InputControl,
	InputError,
	InputIcon,
	InputLabel, 
} from '../../../components/ui/input.style';
import { 
	Checkbox,
	CheckboxControl,
	CheckboxError,
	CheckboxLabel,
	LabelLink
} from '../../../components/ui/checkbox';
import { Title } from '../../../components/ui/title.style';
import { signupFormArr } from './signupForm.config';
import ShowPasswordIcon from '../../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../../assets/icon/hide-password.svg';
import { FormControl, SignUpButton } from './signupForm.style';
import { Div } from '../../../components/ui/div';
import { signup } from '../../../services/signupController';
import { ISignupFormProps } from './signupForm.type';



const SignupForm: React.FC<ISignupFormProps> = ({setForm,setUserData}) => {

	const { register, handleSubmit, errors } = useForm();
	const [showPassword,setShowPassword] = useState(false);
	// const [error, setError] = useState("");
	const onSubmit = (data:any) => {

		signup(data)
		.then((res) =>{
			setForm("email-verification");
			setUserData(res);
			console.log(res)
		})
		.catch ((err) => {
			console.log(err.error)
			// setError(err);
		});
	}
	
	return(
		<FormControl  onSubmit={handleSubmit(onSubmit)}>
		
			<Title main bold gray>Registration</Title>
			{
				signupFormArr.map((el: any,index: number) => 
					<InputControl key={index}>
						<InputLabel>{el.label}</InputLabel>
						<Input
							placeholder={el.placeholder}
							name={el.name} 
							type={!showPassword && el.type === "password" ? el.type : "text"}
							defaultValue={el.defaultValue}
							ref={register({
								required: el.required,
								pattern: el.pattern,
								minLength: el.minLength
							})}/>
						{
							el.type === "password"	&& 
							<InputIcon 
								onClick={() => {setShowPassword(!showPassword)}}
								src={showPassword ? HidePasswordIcon : ShowPasswordIcon} 
								alt="Password"/>
						}
						<InputError visibility={errors[el.name]?.type}>
							{el.errorMessage[errors[el.name]?.type]}
						</InputError>
					</InputControl>
				)
			}

			<CheckboxControl>
				<Checkbox
				name={"termsAndConditions"} 
				ref={register({required: true})}/>
				<CheckboxLabel>
					I have agreed to the <LabelLink>Terms and Conditions</LabelLink> of the website.
				</CheckboxLabel>
				{
					errors.termsAndConditions?.type &&
					<CheckboxError>
						You did not agree to the terms and conditions of the website
					</CheckboxError>
				}
			</CheckboxControl>
			{/* {
				error !== "" &&
				<P>{error}</P>
			} */}
			<Div display={"flex"} justify={"center"}>
				<SignUpButton primary type="submit">
					Signup
				</SignUpButton>
			</Div>
				
		</FormControl>
	)
};

export default SignupForm;