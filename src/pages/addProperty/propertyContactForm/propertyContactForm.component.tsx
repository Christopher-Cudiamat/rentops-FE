import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Input, 
  InputControl,
  InputError, 
  InputIcon, 
  InputLabel 
} from '../../../components/ui/input.style';
import { Title } from '../../../components/ui/title.style';
import ShowPasswordIcon from '../../../assets/icon/show-password.svg';
import HidePasswordIcon from '../../../assets/icon/hide-password.svg';
import { Button } from '../../../components/ui/button.style';
import { contactFormArr } from './propertyContactForm.config';
import { Form } from '../../../components/ui/form.style';
import { IPropertyContactFormProps } from './propertyContactForm.type';
import { AddPropertyPage } from '../addProperty.config';


const PropertyContactForm: React.FC<IPropertyContactFormProps> = ({
  UserAuth,
  setContactInfo,
  setStep
  }) => {

  const { register, handleSubmit, errors } = useForm();
  const [showPassword,setShowPassword] = useState(false);

	const onSubmit = (data:any) => {
    setContactInfo(data);
    setStep(AddPropertyPage.media);
  }
  
    
  return (
    <div>
      <Form  onSubmit={handleSubmit(onSubmit)}>
		
        <Title main bold gray>Sign In</Title>
        {
          contactFormArr.map((el: any,index: number) => 
            <InputControl key={index}>
              <InputLabel>{el.label}</InputLabel>
              <Input
                placeholder={el.placeholder}
                name={el.name} 
                defaultValue={UserAuth[el.name]}
                ref={register({
                  required: el.required,
                  pattern: el.pattern,
                  minLength: el.minLength
                })}/>
              <InputIcon 
                onClick={() => {setShowPassword(!showPassword)}}
                src={showPassword ? HidePasswordIcon : ShowPasswordIcon} 
                alt="Password"/>
              <InputError visibility={errors[el.name]?.type}>
                {el.errorMessage[errors[el.name]?.type]}
              </InputError>
            </InputControl>
          )
        }
        <Button primary>
					Continue
				</Button>
      </Form>
    </div>
  );
}

export default PropertyContactForm;
