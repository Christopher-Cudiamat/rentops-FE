import React, { useEffect, useState } from 'react';
import FieldLocation from '../../../components/addField/fieldLocation/fieldLocation.component';
import { ButtonBack } from '../../../components/ui/button.style';
import { IFilterPropertyForm } from './filterPropertyForm.type';
import FilterPriceRange from '../../../components/filter/filterPriceRange/filterPriceRange.component';
import FilterSizeRange from '../../../components/filter/filterSizeRange/filterSizeRange.component';
import FilterBoxes from '../../../components/filter/filterBoxes/filterBoxes.component';
import FilterCheckBox from '../../../components/filter/filterCheckBox/filterCheckBox.component';
import {
  ButtonShowAllFilter,
  ButtonStyled, 
  FilterButton,
  FilterNav,
  FormContainer,
  ResetFilter,
  } from './filterPropertyForm.style';
import { 
  filterAmenitiesConfig,
  filterBathConfig,
  filterBedConfig, 
  filterContractLengthConfig,
  filterFurnishConfig, 
  filterPropertyTypeConfig 
} from './filterPropertyForm.config';




const FilterPropertyForm: React.FC<IFilterPropertyForm> = ({
  setFilterPropertyInfo,
  setFilter,
  filter
  }) => {

  const [show,setShow] = useState(false);
  const [showAllFilter,setShowAllFilter] = useState(false);
  
  useEffect(() => {
    setFilterPropertyInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickBack = () => {
    setShow(false);
    setShowAllFilter(false);
    setFilterPropertyInfo();
  }

  return (
    <>
      <ButtonStyled onClick={() => setShow(!show)}>
        Filter
      </ButtonStyled>
      {show &&
        <FormContainer>
            <FilterNav>
              <ButtonBack
                onClick={handleClickBack}>
                Back
              </ButtonBack>
              <ResetFilter onClick={() => setFilterPropertyInfo()}>
                Reset filter
              </ResetFilter>
            </FilterNav>
            <FieldLocation/>
            <FilterPriceRange/>
            <FilterSizeRange/>
          { 
            !showAllFilter 
            ?
            <ButtonShowAllFilter 
              type="button"
              secondary
              onClick={() => setShowAllFilter(!showAllFilter)}>
              See All Filter
            </ButtonShowAllFilter>
            :
            <>
              <FilterBoxes 
                arr={filterBedConfig.arr}
                label={filterBedConfig.label}
                filterName={filterBathConfig.name}/>
              <FilterBoxes 
                arr={filterBathConfig.arr}
                label={filterBathConfig.label}
                filterName={filterBathConfig.name}/>
              <FilterCheckBox
                arr={filterPropertyTypeConfig.arr}
                label={filterPropertyTypeConfig.label}
                filterName={filterPropertyTypeConfig.name}/>  
              <FilterCheckBox
                arr={filterFurnishConfig.arr}
                label={filterFurnishConfig.label}
                filterName={filterFurnishConfig.name}/> 
              <FilterCheckBox
                arr={filterContractLengthConfig.arr}
                label={filterContractLengthConfig.label}
                filterName={filterContractLengthConfig.name}/> 
              <FilterCheckBox
                arr={filterAmenitiesConfig.arr}
                label={filterAmenitiesConfig.label}
                filterName={filterAmenitiesConfig.name}/> 
            </>
          }
          <FilterButton
            type="button"
            onClick={() => {
              setFilter(!filter);
              setShow(false);
            }} 
            tertiary>
            Search Filter
          </FilterButton>
        </FormContainer>
      }
    </>
  );
}

export default FilterPropertyForm;
