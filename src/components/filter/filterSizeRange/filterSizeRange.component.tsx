import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { Container, Size, StyledInputRange } from './filterSizeRange.style';


const FilterSizeRange = () => {

  const [value,setValue] = useState<any>({ min: 0, max: 300 });
  const dispatch = useDispatch();

  const handleSize = (e: any) => {
    setValue(e);
    dispatch(setPropertyInfo("sizeRange",{
        min: e.min,
        max: e.max
      }
    ));
  }

  return (
    <Container>
    <Size>
      <span>SIZE: </span>  
      from {value.min}sqm to {value.max}
    </Size>
    <StyledInputRange
      maxValue={300}
      minValue={1}
      step={1}
      value={value}
      onChange={(value:any) => handleSize(value)}/>
    </Container>
  );
}

export default FilterSizeRange;

