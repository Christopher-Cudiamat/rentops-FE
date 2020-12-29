import React, { useState } from 'react';
import EmailVerificationForm from './emailVerificationForm/emailVerification.contianer';
import SignupForm from './signupForm/signupForm.component';

const Signup: React.FC = () => {

  const [form,setForm] = useState("signup");
  const [userData,setUserData] = useState({token:"",message:""});

	return(
    <>
    { 
      form === "signup" ?
      <SignupForm 
        setForm={setForm} 
        setUserData={setUserData}/>
      : <EmailVerificationForm userData={userData}/>
    }
    </>
	)
};

export default Signup;