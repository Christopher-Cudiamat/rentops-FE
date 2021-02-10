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
import { FormControl } from './signupForm.style';
import { signup } from '../../../services/signupController';
import { ISignupData, ISignupFormProps, ISignupObj } from './signupForm.type';
import AuthButton from '../../../components/authButton/authButton.container';
import { Paragraph } from '../../../components/ui/p.style';
import { useHistory } from 'react-router-dom';


const SignupForm: React.FC<ISignupFormProps> = ({
	setForm,
	setUserData,
	setPage
}) => {

	const { register, handleSubmit, errors } = useForm();
	const [showPassword,setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [errorStatus, setErrorStatus] = useState(422);
	const history = useHistory();
	
	const onSubmit = (data:ISignupData) => {
		console.log(data)
		signup(data)
		.then((res) =>{
			setForm("email-verification");
			setUserData(res);
		})
		.catch (err => {
			setErrorStatus(err.response.status);
			setError(err.response.data.error);
		});
	}

	const handleGotoSignIn = () => {
    history.push("./signIn");
    setPage("signInPage", true);
  }
  
	
	return(
		<FormControl  onSubmit={handleSubmit(onSubmit)}>
			<Title 
				main 
				bold 
			gray>
				Sign up
			</Title>
			{
				signupFormArr.map((el: ISignupObj,index: number) => 
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
								minLength: el.minLength,
							})}/>
						{
							el.type === "password"	&& 
							<InputIcon 
								onClick={() => {setShowPassword(!showPassword)}}
								src={showPassword ? HidePasswordIcon : ShowPasswordIcon} 
								alt="Password"/>
						}
						<InputError visibility={
								(error !== "" && el.name === "email") || errors[el.name]?.type
							}>
							{error !== "" ? error : el.errorMessage[errors[el.name]?.type]}
						</InputError>
					</InputControl>
				)
			}

			<CheckboxControl>
				<Checkbox
				name={"termsAndConditions"} 
				ref={register({required: true})}/>
				<CheckboxLabel>
					By creating an account, you agree to Rentop's <LabelLink>Terms and Conditions</LabelLink> and <LabelLink>Privacy Policy</LabelLink>.
				</CheckboxLabel>
				{
					errors.termsAndConditions?.type &&
					<CheckboxError>
						You did not agree to the Terms and Conditions/Privacy Policy of the website
					</CheckboxError>
				}
			</CheckboxControl>
			<AuthButton error={errorStatus === 500 ? error : ""}>
				Sign Up
			</AuthButton>
			<Paragraph bold>
				Already have an account? 
				<span
					onClick={handleGotoSignIn}>
					 Sign In
				</span>	
			</Paragraph>	
		</FormControl>
	)
};

export default SignupForm;