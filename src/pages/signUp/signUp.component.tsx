import React, { useState } from 'react';
import EmailVerificationForm from './emailVerificationForm/emailVerificationForm.component';
import SignupForm from './signupForm/signupForm.component';

const Signup: React.FC = () => {

  const [form,setForm] = useState("signup");
  const [userData,setUserData] = useState({token:"",message:""});
  console.log("USER",userData)
	return(
    <>
    { form === "signup" 
      ?
      <SignupForm 
        setForm={setForm} 
        setUserData={setUserData}/>
      :
      <EmailVerificationForm 
        setForm={setForm}
        userData={userData}/>
    }
    </>
	)
};

export default Signup;