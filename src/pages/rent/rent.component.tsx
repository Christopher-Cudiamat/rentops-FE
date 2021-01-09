import React, { useEffect, useState } from 'react';
import CardProperty from '../../components/cardProperty/cardProperty.component';
import FilterPropertyForm from './filterPropertyForm/filterPropertyForm.container';
import SortPropertyForm from './sortPropertyForm/sortPropertyForm.component';
import { getAllProperties } from '../../services/propertyController';
import { Container, FilterNav, ResultText } from './rent.style';
import { IRentProps } from './rent.type';

const Rent: React.FC<IRentProps>= ({
  properties,
  propertyInfo,
  setPropertyList,
  resetPropertyInfo
  }) => {

  const [sort,setSort] = useState("newest");
  const [filter,setFilter] = useState(false);

  const handlePropertyList = (sort: string, propertyInfo:any) => {
    getAllProperties(sort,propertyInfo)
      .then(res => {
        setPropertyList(res);
      })
  }

  useEffect(() => {
    handlePropertyList(sort,propertyInfo);
    return () => {
      resetPropertyInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort,filter]);

  return (
    <>
    <FilterNav>
      <FilterPropertyForm filter={filter} setFilter={setFilter}/>
      <SortPropertyForm setSort={setSort}/>
    </FilterNav>
    <Container>
      <ResultText>{`${properties.length} Properties Found`}</ResultText>
      <CardProperty data={properties}/>
    </Container>
    </>
  );
}

export default Rent;
