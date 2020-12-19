import React from 'react';
import { Title } from '../../../components/ui/title.style';
import realEstateAgent from '../../../assets/images/home-add-property.jpg';
import { P } from '../../../components/ui/p.style';
import { Button } from '../../../components/ui/button.style';
import { Div } from './homeAddProperty.style';


const HomeAddProperty: React.FC = () => {

  return (
    <Div container>
        <Title gray bold section>Get your propery rented now!</Title>
        <Div wrapper>
          <img src={realEstateAgent} alt="Real estate agent"/>
          <Div detailsWrapper>
            <P> 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </P>
            <Button secondary>Add Property</Button>
          </Div>
        </Div>
    </Div>
  );
}

export default HomeAddProperty;
