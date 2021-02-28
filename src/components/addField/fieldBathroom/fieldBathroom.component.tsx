import React from 'react';
import { Select } from '../../ui/select.style';
import { Option } from '../../ui/option.style';
import { 
  InputControl,
  InputLabel 
} from '../../ui/input.style';
import { bathroomArr } from './fieldBathroom.config';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { useDispatch } from 'react-redux';

const FieldBathroom = () => {

  const dispatch = useDispatch();

  return (
    <InputControl>
      <InputLabel>
        Bath
      </InputLabel>
      <Select onChange={
        (e) => dispatch(setPropertyInfo("bathroom",e.target.value as string))
      }>
        {
          bathroomArr.map((el:string, index: number) => 
            <>
              <Option
                key={index} 
                value={el}>
                {el}
              </Option>
            </>
          )
        } 
      </Select>
    </InputControl>
  );
}

export default FieldBathroom;