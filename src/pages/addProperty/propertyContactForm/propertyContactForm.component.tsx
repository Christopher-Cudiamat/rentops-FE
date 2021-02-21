import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Input, 
  InputControl,
  InputError,  
  InputLabel 
} from '../../../components/ui/input.style';
import { Button, ButtonContainer } from '../../../components/ui/button.style';
import { contactFormArr } from './propertyContactForm.config';
import { 
  IContactFormArr,
  IPropertyContactData,
  IPropertyContactFormProps 
} from './propertyContactForm.type';
import { AddPropertyPage } from '../addProperty.config';
import { FormContact } from './propertyContactForm.style';



const PropertyContactForm: React.FC<IPropertyContactFormProps> = ({
  UserAuth,
  setContactInfo,
  setStep
  }) => {
    console.log(UserAuth)
  const { 
    register,
    handleSubmit,
    errors 
  } = useForm();

	const onSubmit = (data: IPropertyContactData) => {
    setContactInfo(data);
    setStep(AddPropertyPage.media);
  }
  
  return (
      <FormContact onSubmit={handleSubmit(onSubmit)}>
        {
          contactFormArr.map((el: IContactFormArr,index: number) => 
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
                })}
              />
              <InputError visibility={errors[el.name]?.type}>
                {el.errorMessage[errors[el.name]?.type]}
              </InputError>
            </InputControl>
          )
        }
        <ButtonContainer align="center">
          <Button 
            primary
            style={{marginTop: "3rem"}}
          >
            Continue
          </Button>
        </ButtonContainer>
      </FormContact>
 
  );
}

export default PropertyContactForm;
