import React, { useState } from 'react';
import { ButtonBack } from '../../../components/ui/button.style';
import { Title, TitleBar } from '../../../components/ui/title.style';
import { ISortPropertyForm } from './sertPropertyForm.type';
import { sortArr } from './sortPropertyForm.config';
import { ButtonStyled, SortModal, SortText } from './SortPropertyForm.style';

const SortPropertyForm: React.FC<ISortPropertyForm> = ({
  setSort
  }) => {

  const [show,setShow] = useState(false);
  
  const handleSort = (value: string) => {
    setSort(value);
    setShow(false);
  }

  return (
    <>
      <ButtonStyled onClick={() => setShow(!show)}>
        Sort
      </ButtonStyled>
      {
        show &&
        <SortModal>
           <TitleBar>
              <Title sub bold black>
                Sort
              </Title>
              <ButtonBack onClick={() => setShow(false)}>
                Back
              </ButtonBack>
           </TitleBar>
          
          {
            sortArr.map((el:any, index: number) => 
              <SortText 
                key={index} 
                onClick={() => handleSort(el.value)}>
                {el.text}
              </SortText>
            )
          }
        </SortModal>
      }
    </>
  );
}

export default SortPropertyForm;
