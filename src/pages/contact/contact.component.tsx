import React from 'react';
import { Title } from '../../components/ui/title.style';
import contact from "../../assets/images/contact.jpg"
// import { contactFormArr } from './contact.config';
// import { Input, InputControl, InputError, InputLabel } from '../../components/ui/input.style';
// import { useForm } from 'react-hook-form';
// import AuthButton from '../../components/authButton/authButton.component';
import { FormControl } from './contact.style';
import { Button } from '../../components/ui/button.style';

const Contact = () => {
  
  // const { register, handleSubmit, errors } = useForm();

   
	// const onSubmit = (data:any) => {
  //   console.log(data)
  // }
  

  return (
    <>
      <img src={contact} alt="Contact"/>
      <FormControl>
        <Title main bold>How can we help you?</Title>
        {/* {
          contactFormArr.map((el: any,index: number) => 
            <InputControl key={index}>
              <InputLabel>{el.label}</InputLabel>
              <Input
                placeholder={el.placeholder}
                name={el.name} 
                type={el.type}
                defaultValue={el.defaultValue}
                ref={register({
                  required: el.required,
                  pattern: el.pattern,
                  minLength: el.minLength
                })}/>
              <InputError visibility={errors[el.name]?.type}>
                {el.errorMessage[errors[el.name]?.type]}
              </InputError>
            </InputControl>
          )
        }
        <AuthButton error={""}>
          Send message
        </AuthButton>
        */}
        <Button secondary>
          <a href="mailto:rentops.properties@gmail.com">Send us a mail</a> 
        </Button>
        <Button secondary>
          <a href="tel:123-456-7890">Call us</a>
        </Button>
      </FormControl> 
    </>
  );
}

export default Contact;
