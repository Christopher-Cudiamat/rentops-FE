import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { 
  Container, 
  Size, 
  StyledInputRange 
} from './filterSizeRange.style';
import { IFilterRangeValue } from './filterSizeRange.type';


const FilterSizeRange = () => {

  const [value,setValue] = useState<IFilterRangeValue>({ min: 0, max: 300 });
  const dispatch = useDispatch();

  const handleSize = (e: IFilterRangeValue) => {
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
      onChange={(value) => handleSize(value as IFilterRangeValue)}/>
    </Container>
  );
}

export default FilterSizeRange;

