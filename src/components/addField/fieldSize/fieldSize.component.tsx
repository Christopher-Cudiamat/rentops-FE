import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { Paragraph } from '../../ui/p.style';


const FieldSize = () => {

  const [value,setValue] = useState(1);
  const dispatch = useDispatch();

  const handleSize = (e: number) => {
    setValue(e);
    dispatch(setPropertyInfo("size",e))
  }

  return (
    <div style={{margin: "1rem 0rem 4rem 0rem"}}>
    <Paragraph 
      style={{fontSize: "2.2rem", marginBottom: "2rem"}}
    >
      Size: {value} square meters 
    </Paragraph>
    <InputRange
      maxValue={300}
      minValue={1}
      step={1}
      value={value}
      onChange={(value:any) => handleSize(value)}
    />
    </div>
  );
}

export default FieldSize ;
