import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StepperStyled } from '../../components/stepper/stepperStyled.style';
import { Title } from '../../components/ui/title.style';
import { resetPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { scrollToTop } from '../../utils/scrollManager';
import { AddPropertyPage, stepperLabelsArr } from './addProperty.config';
import { IAddPropertyFormProps } from './addProperty.type';
import PropertyContactForm from './propertyContactForm/propertyContactForm.container';
import PropertyInfoForm from './propertyInfoForm/propertyInfoForm.container';
import PropertyUploadMediaForm from './propertyUploadMediaForm/propertyUploadMediaForm.container';



const AddProperty: React.FC<IAddPropertyFormProps> = () => {

  const [step,setStep] = useState(AddPropertyPage.info);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetPropertyInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[step]);
  
  const handleStep = (step: number) => {
    switch(step) {
      case AddPropertyPage.contact:
        return <PropertyContactForm setStep={setStep}/>
      case AddPropertyPage.media:
        return  <PropertyUploadMediaForm/>
      default:
        return  <PropertyInfoForm setStep={setStep}/>
    }
  } 

  return (
    <>
      <Title page bold>
        Advertise property
      </Title>
      <StepperStyled
        steps={stepperLabelsArr}
        activeStep={step - 1}
      />
        
      {handleStep(step)}
    </>
  );
}

export default AddProperty;
