import React from 'react';
import { Select } from '../../ui/select.style';
import { Option } from '../../ui/option.style';
import { locationArr } from './fieldLocation';
import { InputControl, InputLabel } from '../../ui/input.style';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';

const FieldLocation = () => {

  const dispatch = useDispatch();
  
  return (
    <InputControl>
      <InputLabel>
        Location
      </InputLabel>
      <Select onChange={(e:any) => dispatch(setPropertyInfo("location",e.target.value))}>
        {
          locationArr.map((el:any, index: number) => 
            <>
            <Option
              key={index*100} 
              value={el}>
              {el}
            </Option>
            </>
        )} 
      </Select>
    </InputControl>
  );
}

export default FieldLocation;
