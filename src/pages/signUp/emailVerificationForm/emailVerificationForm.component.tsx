import React, { useState } from 'react';
import { Input, InputControl, InputError } from '../../../components/ui/input.style';
import { Title } from '../../../components/ui/title.style';
import { emailVerification } from '../../../services/signupController';
import { IEmailVerificationFormProps } from './emailVerification.type';
import { Text, FormControl } from './emailVerificationForm.style';
import { useHistory } from 'react-router-dom';
import AuthButton from '../../../components/authButton/authButton.component';
import { useForm } from 'react-hook-form';

const EmailVerificationForm: React.FC<IEmailVerificationFormProps> = ({
    userData
    }) => {
			
		const { register, handleSubmit, errors } = useForm();
    const [error,setError] = useState("");
    const history = useHistory();
	
		const onSubmit = (data:any) => {
			emailVerification(userData.token,data.verificationCode)
			.then(() => history.push('./'))
			.catch((err) => setError(err.response.data.error))
		}

	return(
        <FormControl onSubmit={handleSubmit(onSubmit)}>
            <Title main bold gray>Email Verification</Title>
            <Text>{userData.message}</Text>
            <InputControl>
							<Input
								placeholder="Verification Code"
								name="verificationCode"
								type="number"
								defaultValue=""
								ref={register({
									required: true,
								})}/>
              <InputError visibility={errors.verificationCode?.type}>
                Verification code is required
              </InputError>
            </InputControl>
						<AuthButton error={error}>
							Verify code
						</AuthButton>	
        </FormControl>
	)
};

export default EmailVerificationForm;