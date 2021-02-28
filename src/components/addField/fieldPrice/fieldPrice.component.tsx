import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { formatToThousand } from '../../../utils/formatNumbers';
import { Container, Price, StyledInputRange } from './fieldPrice.style';


const FieldPrice = () => {

  const [value,setValue] = useState(.5);
  const dispatch = useDispatch();

  const handlePrice = (e: number) => {
    setValue(e);
    dispatch(setPropertyInfo("price", e * 1000))
  }

  return (
    <Container>
    <Price>
      Price: ₱ {formatToThousand(value)}
    </Price>
    <StyledInputRange
      maxValue={50}
      minValue={1}
      step={.5}
      value={value}
      onChange={(value) => handlePrice(value as number)}/>
    </Container>
  );
}

export default FieldPrice ;

