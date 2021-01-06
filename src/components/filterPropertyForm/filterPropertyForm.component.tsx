import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../pages/addProperty/propertyInfoForm/propertyInfoForm.style';
import FieldAmenities from '../fieldAmenities/fieldAmenities.component';
import FieldBathroom from '../fieldBathroom/fieldBathroom.component';
import FieldBedroom from '../fieldBedroom/fieldBedroom.component';
import FieldContractLength from '../fieldContractLength/fieldContractLength.component';
import FieldDeveloper from '../fieldDeveloper/fieldDeveloper.component';
import FieldFurnish from '../fieldFurnish/fieldFurnish.component';
import FieldLocation from '../fieldLocation/fieldLocation.component';
import FieldPrice from '../fieldPrice/fieldPrice.component';
import FieldPropertyType from '../fieldPropertyType/fieldPropertyType.component';
import FieldSize from '../fieldSize/fieldSize.component';
import { ButtonBack } from '../ui/button.style';
import {
  ButtonShowAllFilter,
  ButtonStyled, 
  FilterButton,
  FilterNav,
  FormContainer,
  ResetFilter,
  } from './filterPropertyForm.style';
import { IFilterPropertyForm } from './filterPropertyForm.type';


const FilterPropertyForm: React.FC<IFilterPropertyForm> = ({
  resetPropertyInfo,
  setFilter,
  filter
  }) => {

  const [show,setShow] = useState(false);
  const [showAllFilter,setShowAllFilter] = useState(false);
  
  useEffect(() => {
    resetPropertyInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ButtonStyled onClick={() => setShow(!show)}>
        Filter
      </ButtonStyled>
      {show &&
        <FormContainer>
            <FilterNav>
              <ButtonBack
                onClick={() => {
                  setShow(false);
                  setShowAllFilter(false)
                }}>
                Back
              </ButtonBack>
              <ResetFilter onClick={() => resetPropertyInfo()}>
                Reset filter
              </ResetFilter>
            </FilterNav>
            <FieldLocation/>
            <FieldPrice/>
            <FieldSize/>
            <FieldPropertyType/>  
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
              <FieldContractLength/>
              <FieldDeveloper/>
              <Wrapper>
                <FieldFurnish/>
                <FieldBedroom/>
                <FieldBathroom/>
              </Wrapper>
              <FieldAmenities/>
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
