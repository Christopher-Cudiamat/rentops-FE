import React from 'react';
import { addAmenities, removeAmenities } from '../../../store/propertyInfo/propertyInfo.action';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, CheckboxControl, CheckboxLabel } from '../../ui/checkbox';
import { Container, FilterLabel } from './filterCheckBox.style';
import { IFilterCheckBoxProps } from './filterCheckBox.type';


const FilterCheckBox: React.FC<IFilterCheckBoxProps> = ({
  arr,
  label,
  filterName
}) => {

  const dispatch = useDispatch();
  const selectedArr = useSelector((state: any) => state.propertyInfo[filterName]);
  const handleOnChange = (el: string) => {
    if(selectedArr.includes(el)) {
       dispatch(removeAmenities(filterName,el));
    } else {
      dispatch(addAmenities(filterName,el));
    }
  }

  return (
    <Container>
      <FilterLabel>
        {label}
      </FilterLabel>
      {
        arr.map((el:any, index: number) => 
          <CheckboxControl key={index}>
            <Checkbox onChange={() => handleOnChange(el.value)}/>
            <CheckboxLabel>{el.text}</CheckboxLabel>
          </CheckboxControl>
        )
      }
    </Container>
  );
}

export default FilterCheckBox;

