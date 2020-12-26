import React, { useRef, useState } from 'react';
import { changePasswordFormArr } from './changePasswordForm.config';
import { useForm } from 'react-hook-form';
import { 
	Input,
	InputControl,
	InputError,
	InputIcon,
	InputLabel, 
} from '../../../../components/ui/input.style';
import { FormControl} from '../passwordRecoveryForm.style';
import ShowPasswordIcon from '../../../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../../../assets/icon/hide-password.svg';
import { changePassword } from '../../../../services/signinController';
import { IChangePasswordProps } from './changePassword.type';
import { signInPages } from '../../signIn.config';
import AuthButton from '../../../../components/authButton/authButton.component';

const ChangePasswordForm: React.FC<IChangePasswordProps> = ({
  email,
  setForm
  }) => {

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [showPassword,setShowPassword] = useState(false);
  const [newPassword,setNewPassword] = useState("");
  const [error,setError] = useState("");
  const password = useRef({});
  password.current = watch("newPassword", "");

  const onSubmit = (data:any) => {
    changePassword(email,data.newPassword)
      .then(() => setForm(signInPages.signIn))
      .catch(err => setError(err.response.data.error))
	}

  return (
    <FormControl  onSubmit={handleSubmit(onSubmit)}>
     	{
				changePasswordFormArr.map((el: any,index: number) => 
					<InputControl key={index}>
						<InputLabel>{el.label}</InputLabel>
            { 
              el.name === "newPassword" ?
              <Input
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={el.placeholder}
                name={el.name} 
                type={!showPassword && el.type === "password" ? el.type : "text"}
                defaultValue={el.defaultValue}
                ref={register({
                  required: el.required,
                  pattern: el.pattern,
                  minLength: el.minLength
              })}/>
              :
              <Input
                disabled={newPassword.length < 8}
                placeholder={el.placeholder}
                name={el.name} 
                type={!showPassword && el.type === "password" ? el.type : "text"}
                defaultValue={el.defaultValue}
                ref={register({
                  required: el.required,
                  validate: value => value === password.current || ""
              })}
              />
            }
						{
							el.name === "newPassword"	&& 
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
      <AuthButton error={error}>
				Change password
			</AuthButton>	
    </FormControl>
  );
}

export default ChangePasswordForm;
