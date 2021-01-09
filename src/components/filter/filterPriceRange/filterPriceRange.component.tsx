import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { formatToThousand } from '../../../utils/formatNumbers';
import { Container, Price, StyledInputRange } from './filterPriceRange.style';


const FilterPriceRange = () => {

  const [value,setValue] = useState<any>({ min: 0, max: 50 });
  const dispatch = useDispatch();
  
  const handlePrice = (e: any) => {
    setValue(e);
    dispatch(setPropertyInfo("priceRange",{
        min: e.min * 1000,
        max: e.max * 1000
      }
    ));
  }

  return (
    <Container>
    <Price>
      <span>PRICE: </span> 
      from ₱{formatToThousand(value.min)} to ₱{formatToThousand(value.max)}
    </Price>
    <StyledInputRange
      maxValue={50}
      minValue={1}
      value={value}
      onChange={(value:any) => handlePrice(value)}/>
    </Container>
  );
}

export default FilterPriceRange;

