import React, { useState } from 'react';
import PasswordRecoveryForm from './passwordRecoveryForm/passwordRecoveryForm.component';
import { signInPages } from './signIn.config';
import SignInForm from './signInForm/signInForm.component';


const SignIn: React.FC = () => {

  const [form,setForm] = useState(signInPages.signIn);

  return(
    <>
      { form === signInPages.signIn 
      ?
      <SignInForm setForm={setForm}/>
      :
      <PasswordRecoveryForm  setForm={setForm}/>
      }
    </>
  )
}

export default SignIn;