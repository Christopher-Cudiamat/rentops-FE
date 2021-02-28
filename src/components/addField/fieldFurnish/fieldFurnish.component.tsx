import React from 'react';
import { Select } from '../../ui/select.style';
import { Option } from '../../ui/option.style';
import { 
  InputControl,
  InputLabel 
} from '../../ui/input.style';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { useDispatch } from 'react-redux';

const furnishedrArr = [
  "Bare",
  "Semi-Furnished",
  "Fully-Furnished",
];


const FieldFurnish = () => {

  const dispatch = useDispatch();
  
  return (
    <InputControl>
      <InputLabel>
        Furnish
      </InputLabel>
      <Select onChange={
          (e) => dispatch(setPropertyInfo("furnish",e.target.value))
        }
      >
        {
          furnishedrArr.map((el:string, index: number) => 
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

export default FieldFurnish;