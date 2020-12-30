import React from 'react';
import { Select } from '../ui/select.style';
import { Option } from '../ui/option.style';
import { InputControl, InputLabel } from '../ui/input.style';
import { bedroomArr } from './fieldBedroom.config';
import { setPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { useDispatch } from 'react-redux';

const FieldBedroom = () => {
  
  const dispatch = useDispatch();
  
  return (
    <InputControl>
      <InputLabel>
        Bed
      </InputLabel>
      <Select onChange={(e:any) => dispatch(setPropertyInfo("bed",e.target.value))}>
        {
          bedroomArr.map((el:any, index: number) => 
            <>
            <Option
              key={index} 
              value={el}>
              {el}
            </Option>
            </>
        )} 
      </Select>
    </InputControl>
  );
}

export default FieldBedroom;