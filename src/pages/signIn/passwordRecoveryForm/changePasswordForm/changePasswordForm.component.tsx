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
import { FormControl, ContinueButton } from '../passwordRecoveryForm.style';
import { Div } from '../../../../components/ui/div';
import ShowPasswordIcon from '../../../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../../../assets/icon/hide-password.svg';

const ChangePasswordForm: React.FC = () => {

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [showPassword,setShowPassword] = useState(false);
  const [newPassword,setNewPassword] = useState("");
  const password = useRef({});
  password.current = watch("newPassword", "");

  console.log("NEW", newPassword);

  const onSubmit = (data:any) => {

		console.log(data);
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
      <Div display={"flex"} justify={"center"}>
        <ContinueButton 
          primary 
          type="submit">
					Change Password
				</ContinueButton>
			</Div>
    </FormControl>
  );
}

export default ChangePasswordForm;
