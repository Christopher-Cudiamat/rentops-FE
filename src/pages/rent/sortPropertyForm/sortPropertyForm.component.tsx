import React, { useState } from 'react';
import { Backdrop } from '../../../components/ui/backdrop.style';
import { ButtonBack } from '../../../components/ui/button.style';
import { Title, TitleBar } from '../../../components/ui/title.style';
import { scrollStop } from '../../../utils/scrollManager';
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
    scrollStop(false);
  }

  const handleOpenModal = () => {
    setShow(true);
    scrollStop(true);
  }

  const handleCloseModal = () => {
    setShow(false);
    scrollStop(false);
  }

  return (
    <>
      <ButtonStyled onClick={handleOpenModal}>
        Sort
      </ButtonStyled>
      {
        show &&
        <>
          <Backdrop onClick={handleCloseModal}/>
          <SortModal>
            <TitleBar>
                <Title 
                  style={{marginBottom:"0rem"}}
                  sub 
                  bold 
                black>
                  Sort list
                </Title>
                <ButtonBack onClick={handleCloseModal}>
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
        </>
      }
    </>
  );
}

export default SortPropertyForm;
