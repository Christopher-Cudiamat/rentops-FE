import React from 'react';
import { Select } from '../ui/select.style';
import { Option } from '../ui/option.style';
import { InputControl, InputLabel } from '../ui/input.style';
import { contractLengthArr } from './fieldContractLength.config';
import { setPropertyInfo } from '../../store/propertyInfo/propertyInfo.action';
import { useDispatch } from 'react-redux';

const FieldContractLength = () => {

  const dispatch = useDispatch();
  
  return (
    <InputControl>
      <InputLabel>
        Contract Length
      </InputLabel>
      <Select onChange={(e:any) => dispatch(setPropertyInfo("contractLength",e.target.value))}>
        {
          contractLengthArr.map((el:any, index: number) => 
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

export default FieldContractLength;