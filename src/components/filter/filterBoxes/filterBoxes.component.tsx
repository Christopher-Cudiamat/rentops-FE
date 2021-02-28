import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';
import { 
  Box, 
  Container, 
  FilterLabel 
} from './filterBoxes.style';
import { 
  IArr, 
  IFilterBoxesProps 
} from './filterBoxes.type';


const FilterBoxes: React.FC<IFilterBoxesProps> = ({
  arr,
  label,
  filterName
}) => {

  let [selectedBox,setSelectedBox] = useState(0);
  const dispatch = useDispatch();

  const handleSelectedBox = (index: number,value: string) => {
    setSelectedBox(index);
    dispatch(setPropertyInfo(filterName,value));
  }

  return (
    <Container>
      <FilterLabel>
        {label}
      </FilterLabel>
      {
        arr.map((el: IArr, index: number) => 
          <Box 
            key={index}
            active={index === selectedBox}
            onClick={() => handleSelectedBox(index,el.value)}
            >{el.text}</Box>
        )
      }
    </Container>
  );
}

export default FilterBoxes;

