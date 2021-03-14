import React, { useEffect, useState } from "react";
import CardProperty from "../../components/cardProperty/cardProperty.component";
import FilterPropertyForm from "./filterPropertyForm/filterPropertyForm.container";
import SortPropertyForm from "./sortPropertyForm/sortPropertyForm.component";
import { getAllProperties } from "../../services/propertyController";
import { Container, FilterNav } from "./rent.style";
import { IRentProps } from "./rent.type";
import { IPropertyInfoState } from "../../store/propertyInfo/propertyInfo.type";
import Pagination from "../../components/pagination/pagination.component";
import ResultText from "../../components/resultText/resultText.component";

const Rent: React.FC<IRentProps> = ({
  data,
  propertyInfo,
  setPropertyList,
  resetPropertyInfo,
}) => {
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState(false);
  const [skip, setSkip] = useState(0);
  const ItemPerPage: number = 6;

  const handlePropertyList = (
    sort: string,
    propertyInfo: IPropertyInfoState
  ) => {
    getAllProperties(sort, propertyInfo, skip).then((res) => {
      setPropertyList(res.dataLength, res.properties);
    });
  };

  useEffect(() => {
    handlePropertyList(sort, propertyInfo);
    return () => {
      resetPropertyInfo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, filter, skip]);

  return (
    <>
      <FilterNav>
        <FilterPropertyForm filter={filter} setFilter={setFilter} />
        <SortPropertyForm setSort={setSort} />
      </FilterNav>
      <Container>
        <ResultText dataLength={data.dataLength} />
        <CardProperty data={data.properties} />
        <Pagination
          setSkip={setSkip}
          pageCount={data.dataLength}
          ItemPerPage={ItemPerPage}
        />
      </Container>
    </>
  );
};

export default Rent;
