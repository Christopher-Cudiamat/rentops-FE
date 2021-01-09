import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAmenities, removeAmenities } from '../../../store/propertyInfo/propertyInfo.action';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../ui/checkbox';
import { Paragraph } from '../../ui/p.style';
import { Container, ShowAllButton } from './fiedAmenities.style';

const amenitiesArr = [
  {labelName:"Air Condition"},
  {labelName:"Balcony"},
  {labelName:"CCTV"},
  {labelName:"Security Guards"},
  {labelName:"Garage"},
  {labelName:"Business District"},
  {labelName:"Near School"},
  {labelName:"Balcony"},
  {labelName:"Pets allowed"},
]

const FieldAmenities = () => {

  const [show,setShow] = useState(false);
  const dispatch = useDispatch();
  const amenitiesSelectedArr = useSelector((state: any) => state.propertyInfo.amenities);
  
  const handleAmenities = (el: string) => {
    if(amenitiesSelectedArr.includes(el)) {
       dispatch(removeAmenities("amenities",el));
    } else {
      dispatch(addAmenities("amenities",el));
    }
  }
  
  return (
    <Container>
      <Paragraph>Amenities</Paragraph>
      {
        amenitiesArr.slice(0,show ? amenitiesArr.length : 5)
        .map((el:{labelName: string}, index: number) => 
          <CheckboxControl key={index}>
            <Checkbox onChange={() => handleAmenities(el.labelName)}/>
            <CheckboxLabel>{el.labelName}</CheckboxLabel>
          </CheckboxControl> 
        )
      }
      <ShowAllButton onClick={() => setShow(!show)}>
        {show  ? "Hide" : "Show All"}
      </ShowAllButton>
    </Container>
  );
}

export default FieldAmenities;
