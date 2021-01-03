import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { formatToThousand } from '../../utils/formatNumbers';
import { Paragraph } from '../ui/p.style';
import { StyledInputRange } from './fieldPrice.style';


const FieldPrice = () => {

  const [value,setValue] = useState(.5);
  const dispatch = useDispatch();

  const handlePrice = (e: any) => {
    setValue(e);
    dispatch(setPropertyInfo("price",e * 1000))
  }

  return (
    <div style={{margin: "1rem 0rem 4rem 0rem"}}>
    <Paragraph style={{fontSize: "2.5rem", marginBottom: "2rem"}}>
      Price: ₱ {formatToThousand(value)}
    </Paragraph>
    <StyledInputRange
      maxValue={50}
      minValue={1}
      step={.5}
      value={value}
      onChange={(value:any) => handlePrice(value)}/>
    </div>
  );
}

export default FieldPrice ;

