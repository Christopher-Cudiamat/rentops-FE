import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Div } from '../../../components/ui/div';
import { 
  Input, 
  InputControl,
  InputError, 
  InputIcon, 
  InputLabel 
} from '../../../components/ui/input.style';
import { Title } from '../../../components/ui/title.style';
import { signInFormArr } from './signInform.config';
import { FormControl, Text, SignInButton } from './signInForm.style';
import ShowPasswordIcon from '../../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../../assets/icon/hide-password.svg';
import { ISignInFormProps } from './signInForm.type';
import { signin } from '../../../services/signinController';
import { signInPages } from '../signIn.config';
import AuthButton from '../../../components/authButton/authButton.component';

const SignInForm: React.FC<ISignInFormProps> = ({setForm}) => {
  
  const { register, handleSubmit, errors } = useForm();
  const [showPassword,setShowPassword] = useState(false);
  const [error, setError] = useState("");
 
	const onSubmit = (data:any) => {
    signin(data)
    .then(res => console.log("Res",res))
    .catch(err => setError(err.response.data.error))
	}
    
  return (
    <div>
      <FormControl  onSubmit={handleSubmit(onSubmit)}>
		
        <Title main bold gray>Sign In</Title>
        {
          signInFormArr.map((el: any,index: number) => 
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
        <Text onClick={() => setForm(signInPages.recoverPassword)}>
          Forgot password?
        </Text>
        <AuthButton error={error}>
					Sign in
				</AuthButton>	
      </FormControl>
    </div>
  );
}

export default SignInForm;