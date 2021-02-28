import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { formatToThousand } from '../../../utils/formatNumbers';
import { Container, Price, StyledInputRange } from './filterPriceRange.style';
import { IFilterRangeValue } from './filterPriceRange.type';


const FilterPriceRange = () => {

  const [value,setValue] = useState<IFilterRangeValue>({ min: 0, max: 50 });
  const dispatch = useDispatch();
  
  const handlePrice = (e: IFilterRangeValue) => {
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
      onChange={(value) => handlePrice(value as IFilterRangeValue)}/>
    </Container>
  );
}

export default FilterPriceRange;

