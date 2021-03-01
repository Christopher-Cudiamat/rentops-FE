import React, { useEffect, useState } from 'react';
import FieldBathroom from '../../../components/addField/fieldBathroom/fieldBathroom.component';
import FieldBedroom from '../../../components/addField/fieldBedroom/fieldBedroom.component';
import FieldContractLength from '../../../components/addField/fieldContractLength/fieldContractLength.component';
import FieldDeveloper from '../../../components/addField/fieldDeveloper/fieldDeveloper.component';
import FieldLocation from '../../../components/addField/fieldLocation/fieldLocation.component';
import FieldPrice from '../../../components/addField/fieldPrice/fieldPrice.component';
import FieldPropertyType from '../../../components/addField/fieldPropertyType/fieldPropertyType.component';
import { FormContainer, Wrapper } from './propertyInfoForm.style';
import FieldFurnish from '../../../components/addField/fieldFurnish/fieldFurnish.component';
import FieldSize from '../../../components/addField/fieldSize/fieldSize.component';
import FieldAmenities from '../../../components/addField/fieldAmenities/fieldAmenities.component';
import { 
  Button, 
  ButtonContainer 
} from '../../../components/ui/button.style';
import { IProperyInfoFormProps } from './propertyInfoForm.type';
import { AddPropertyPage } from '../addProperty.config';
import FieldDescription from '../../../components/addField/fieldDesciption/fieldDescription.component';
import { InputError } from '../../../components/ui/input.style';
import { scrollToTop } from '../../../utils/scrollManager';



const PropertyInfoForm: React.FC<IProperyInfoFormProps> = ({
  setStep,
  setAddPropertyInfo,
  propertyInfo
  }) => {


  const [showError,setShowError] = useState(false)

  useEffect(() => {
    setAddPropertyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(propertyInfo.location !== ""){
      setShowError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyInfo.location]);

  const handleSubmit = (e: React.SyntheticEvent) => {

    e.preventDefault();

    if(propertyInfo.location === ""){
      setShowError(true);
      scrollToTop();
    } else {
      setShowError(false);
      setStep(AddPropertyPage.contact);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FieldLocation/>
      <InputError 
        style={{marginTop: "-1.5rem"}}
        visibility={showError}>
        Location is required
      </InputError>
      <FieldPrice/>
      <FieldSize/>
      <FieldPropertyType/>
      <FieldDescription/>
      <FieldContractLength/>
      <FieldDeveloper/>
      <Wrapper>
        <FieldFurnish/>
        <FieldBedroom/>
        <FieldBathroom/>
      </Wrapper>
      <FieldAmenities/>
      <ButtonContainer 
        align="center">
        <Button 
          primary>
          Continue
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default PropertyInfoForm;
