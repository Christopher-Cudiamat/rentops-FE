import React, { useState } from 'react';
import { Input, InputControl, InputError } from '../../../components/ui/input.style';
import { Title } from '../../../components/ui/title.style';
import { emailVerification } from '../../../services/signupController';
import { IEmailVerificationFormProps } from './emailVerification.type';
import { DivContainer, VerifyButton, Text } from './emailVerificationForm.style';
import { useHistory } from 'react-router-dom';

const EmailVerificationForm: React.FC<IEmailVerificationFormProps> = ({
    setForm,
    userData
    }) => {

    const [verificationCode,setVerificationCode] = useState("");
    const [error,setError] = useState("");
    const history = useHistory();

    const handleVerifyEmail = () => {
        emailVerification(userData.token,verificationCode)
        .then((res) => {
            console.log(res)
            history.push('./')
        })
        .catch((err) => {
            if(err) setError("Invalid verification code.");
        })
    }

	return(
        <DivContainer>
            <Title main bold gray>Email Verification</Title>
            <Text>{userData.message}</Text>
            <InputControl>
                <Input
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Verification Code"
                    name="verificationCode"
                    type="number"
                    defaultValue=""/>
                {
                    error !== "" &&
                    <InputError>{error}</InputError> 
                }
            </InputControl>
            <VerifyButton 
                primary
                onClick={handleVerifyEmail}>
                Verify
            </VerifyButton>
        </DivContainer>
	)
};

export default EmailVerificationForm;