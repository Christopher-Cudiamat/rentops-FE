import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StepperStyled } from '../../components/stepper/stepperStyled.style';
import { resetPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { AddPropertyPage, stepperLabelsArr } from './addProperty.config';
import { IAddPropertyFormProps } from './addProperty.type';
import PropertyContactForm from './propertyContactForm/propertyContactForm.component';
import PropertyInfoForm from './propertyInfoForm/propertyInfoForm.component';
import ProperUploadMediaForm from './propertyUploadMediaForm/propertyUploadMediaForm.component';

const AddProperty: React.FC<IAddPropertyFormProps> = () => {

  const [step,setStep] = useState(AddPropertyPage.info);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetPropertyInfo());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const handleStep = (step: number) => {
    switch(step) {
      case AddPropertyPage.contact:
        return <PropertyContactForm/>
      case AddPropertyPage.media:
        return  <ProperUploadMediaForm/>
      default:
        return  <PropertyInfoForm/>
    }
  }

  return (
    <>
      <StepperStyled
        steps={stepperLabelsArr}
        activeStep={step - 1}/>
        
      {handleStep(step)}
    </>
  );
}

export default AddProperty;
