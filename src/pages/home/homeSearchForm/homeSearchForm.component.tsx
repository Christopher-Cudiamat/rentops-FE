import React, { useState } from 'react';
import { 
  Container,
  HeroImageDesktop,
  HeroImageMobile,
  MainContainer,
  SearchIcon,
  SearchInput,
  SearchInputContainer
} from './homeSearchForm.style';
import bannerImg from "../../../assets/images/apartments-hero.png";
import bannerImgDesktop from "../../../assets/images/hero-home-desktop-2.png";
import search from "../../../assets/icon/search.svg";
import { Title } from '../../../components/ui/title.style';
import SearchModal from '../../../components/modals/searchModals/searchModal.component';



const HeaderForm: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <MainContainer>
      <Container>
        <Title 
          header 
          bold
        >
          We'll guide you home
        </Title>
        <Title 
          headerSub 
          bold
        >
          Rent apartmens, condos and more...
        </Title>
        <HeroImageMobile 
          src={bannerImg} 
          alt={"Apartment buildings"}
        />
        <SearchInputContainer>
          <SearchInput onClick={() => setOpenModal(true)}> 
            Where do you want to live?
          </SearchInput> 
          <SearchIcon 
            src={search} 
            alt={"Search"}
          />
        </SearchInputContainer>  
      </Container>
      <HeroImageDesktop 
        src={bannerImgDesktop} 
        alt={"Apartment buildings"}
      />
      <SearchModal 
        isOpen={openModal} 
        setCloseModal={setOpenModal}
      />
      
    </MainContainer>
  );
}

export default HeaderForm;
