import React from 'react';
import { Select } from '../../ui/select.style';
import { Option } from '../../ui/option.style';
import { propertyTypeArr } from './fieldPropertyType.config';
import { InputControl, InputLabel } from '../../ui/input.style';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';

const FieldPropertyType = () => {
  
  const dispatch = useDispatch();
  
  return (
    <InputControl>
      <InputLabel>
        Property Type
      </InputLabel>
      <Select onChange={(e:any) => dispatch(setPropertyInfo("propertyType",e.target.value))}>
        {
          propertyTypeArr.map((el:any, index: number) => 
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

export default FieldPropertyType;