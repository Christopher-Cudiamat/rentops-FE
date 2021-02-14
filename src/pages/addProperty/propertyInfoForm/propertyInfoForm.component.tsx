import React, { useEffect } from 'react';
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
import { Button } from '../../../components/ui/button.style';
import { IProperyInfoFormProps } from './propertyInfoForm.type';
import { AddPropertyPage } from '../addProperty.config';
import FieldDescription from '../../../components/addField/fieldDesciption/fieldDescription.component';

const PropertyInfoForm: React.FC<IProperyInfoFormProps> = ({
  setStep,
  setAddPropertyInfo,
  }) => {

  useEffect(() => {
    setAddPropertyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    setStep(AddPropertyPage.contact)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FieldLocation/>
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
      <Button 
        primary 
        style={{marginTop: "3rem"}}>
        Continue
      </Button>
    </FormContainer>
  );
}

export default PropertyInfoForm;
