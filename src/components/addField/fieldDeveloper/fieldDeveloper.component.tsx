import React from 'react';
import { Select } from '../../ui/select.style';
import { Option } from '../../ui/option.style';
import { InputControl, InputLabel } from '../../ui/input.style';
import { developerArr } from './fieldDeveloper.config';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { useDispatch } from 'react-redux';

const FieldDeveloper = () => {

  const dispatch = useDispatch();

  return (
    <InputControl>
      <InputLabel>
        Developer
      </InputLabel>
      <Select onChange={
          (e) => dispatch(setPropertyInfo("developer",e.target.value))
        }
      >
        {
          developerArr.map((el:string, index: number) => 
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

export default FieldDeveloper;