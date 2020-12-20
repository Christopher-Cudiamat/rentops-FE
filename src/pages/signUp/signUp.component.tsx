import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form } from '../../components/ui/form.style';
import { 
	Input,
	InputControl,
	InputError,
	InputIcon,
	InputLabel 
} from '../../components/ui/input.style';
import { 
	Checkbox,
	CheckboxControl,
	CheckboxError,
	CheckboxLabel,
	LabelLink
} from '../../components/ui/checkbox';
import { Title } from '../../components/ui/title.style';
import { signupFormArr } from './signUp.config';
import ShowPasswordIcon from '../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../assets/icon/hide-password.svg';
import { SignUpButton } from './signUp.style';
import { Div } from '../../components/ui/div';
import { signup } from '../../services/signupController';



const SignUp: React.FC = () => {

	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data:any) => {
		console.log(data);
		signup(data)
		.then((res) =>{
			console.log(res);
		})
		.catch ((err) => {
			console.log(err)
		});

	}
	const [showPassword,setShowPassword] = useState(false);
	
	return(
		<Form  onSubmit={handleSubmit(onSubmit)} style={{padding: "6rem 2rem",margin:"auto"}}>
		
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
						{
							errors[el.name]?.type &&
							<InputError>{el.errorMessage[errors[el.name].type]}</InputError>
						}
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
			<Div display={"flex"} justify={"center"}>
				<SignUpButton primary type="submit">
					Signup
				</SignUpButton>
			</Div>
				
		</Form>
	)
};

export default SignUp;