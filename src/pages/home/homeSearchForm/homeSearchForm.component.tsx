import React, { useState } from 'react';
import { 
  Container,
  HeroImage,
  SearchFilterModal,
  SearchIcon,
  SearchInput
} from './homeSearchForm.style';
import bannerImg from "../../../assets/images/apartments-hero.png";
import search from "../../../assets/icon/search.svg";
import { Title } from '../../../components/ui/title.style';
import { Button, ButtonBack } from '../../../components/ui/button.style';
import FieldLocation from '../../../components/addField/fieldLocation/fieldLocation.component';
import FilterPriceRange from '../../../components/filter/filterPriceRange/filterPriceRange.component';
import { useHistory } from 'react-router-dom';

const HeaderForm: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();

  return (
    <Container>
        <Title main bold>We'll guide you home</Title>
        <Title sub bold>Rent apartmens, condos and more...</Title>
        <HeroImage src={bannerImg} alt={"Apartment buildings"}/>
        <SearchInput onClick={() => setOpenModal(true)}>
          <div> 
            Where do you want to live?
          </div> 
          <SearchIcon src={search} alt={"Search"}/>
        </SearchInput>  
        {
          openModal &&
          <SearchFilterModal>
            <ButtonBack onClick={() => setOpenModal(false)}>
              Back
            </ButtonBack>
            <FieldLocation/>
            <FilterPriceRange/>
            <Button 
              onClick={() => history.push('./rent')}
              tertiary>
              Search
            </Button>
          </SearchFilterModal>   
        }
          
    </Container>
  );
}

export default HeaderForm;
