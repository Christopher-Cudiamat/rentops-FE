import React from 'react';
import FieldBathroom from '../../../components/fieldBathroom/fieldBathroom.component';
import FieldBedroom from '../../../components/fieldBedroom/fieldBedroom.component';
import FieldContractLength from '../../../components/fieldContractLength/fieldContractLength.component';
import FieldDeveloper from '../../../components/fieldDeveloper/fieldDeveloper.component';
import FieldLocation from '../../../components/fieldLocation/fieldLocation.component';
import FieldPrice from '../../../components/fieldPrice/fieldPrice.component';
import FieldPropertyType from '../../../components/fieldPropertyType/fieldPropertyType.component';

import { Form } from '../../../components/ui/form.style';
import { Wrapper } from './propertyInfoForm.style';
import FieldFurnish from '../../../components/fieldFurnish/fieldFurnish.component';
import FieldSize from '../../../components/fieldSize/fieldSize.component';
import FieldAmenities from '../../../components/fieldAmenities/fieldAmenities.component';
import { Button } from '../../../components/ui/button.style';

const PropertyInfoForm = () => {
  return (
    <Form style={{padding: "4rem 2rem 10rem 2rem"}}>
      <FieldLocation/>
      <FieldPrice/>
      <FieldSize/>
      <FieldPropertyType/>
      <FieldContractLength/>
      <FieldDeveloper/>
      <Wrapper>
        <FieldFurnish/>
        <FieldBedroom/>
        <FieldBathroom/>
      </Wrapper>
      <FieldAmenities/>
      <Button primary style={{marginTop: "3rem"}}>
        Continue
      </Button>
    </Form>
  );
}

export default PropertyInfoForm;
