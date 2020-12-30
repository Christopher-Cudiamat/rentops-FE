import React from 'react';
import { Select } from '../ui/select.style';
import { Option } from '../ui/option.style';
import { propertyTypeArr } from './fieldPropertyType.config';
import { InputControl, InputLabel } from '../ui/input.style';

const FieldPropertyType = () => {
  return (
    <InputControl>
      <InputLabel>
        Property Type
      </InputLabel>
      <Select>
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