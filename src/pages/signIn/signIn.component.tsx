import React, { useState } from 'react';
import PasswordRecoveryForm from './passwordRecoveryForm/passwordRecoveryForm.component';
import SignInForm from './signInForm/signInForm.component';


const SignIn: React.FC = () => {

  const [form,setForm] = useState("signin");

  return(
    <>
      { form === "signin" 
      ?
      <SignInForm setForm={setForm}/>
      :
      <PasswordRecoveryForm/>
      }
    </>
  )
}

export default SignIn;