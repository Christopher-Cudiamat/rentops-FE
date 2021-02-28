import React from 'react';
import FieldLocation from '../../addField/fieldLocation/fieldLocation.component';
import FilterPriceRange from '../../filter/filterPriceRange/filterPriceRange.component';
import { Button } from '../../ui/button.style';
import { Container} from './searchModal.style';
import { useHistory } from 'react-router-dom';
import { ISearchModalProps } from './searchModal.type';
import Modals from '../modals.component';
import { Title } from '../../ui/title.style';


const SearchModal: React.FC<ISearchModalProps> = ({
  isOpen,
  setCloseModal
}) => {

  const history = useHistory();

  return (
    <Modals
      isOpen={isOpen} 
      setCloseModal={setCloseModal}
    >
      <Container>
        <Title small bold>Search Property</Title>
        <FieldLocation/>
        <FilterPriceRange/>
        <Button 
          onClick={() => history.push('./rent')}
          tertiary
        >
          Search
        </Button>
      </Container>  
    </Modals>
  );
}

export default SearchModal;
