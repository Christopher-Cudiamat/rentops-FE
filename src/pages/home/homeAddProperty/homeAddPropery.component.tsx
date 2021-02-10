import React from 'react';
import { Title } from '../../../components/ui/title.style';
import realEstateAgent from '../../../assets/images/home-add-property-2.png';
import { Paragraph } from '../../../components/ui/p.style';
import { Button } from '../../../components/ui/button.style';
import { Div } from './homeAddProperty.style';
import { useHistory } from 'react-router-dom';
import { IHomeAddPropertiesProps } from './homeAddProperty.type';


const HomeAddProperty: React.FC<IHomeAddPropertiesProps> = ({
  isAuthenticated,
  setPage
}) => {
  
  const history = useHistory();

  const handleGotoAddProperty = () => {
    if(isAuthenticated){
      setPage("addPropertyPage", true);
      history.push('./add-property');
    } else {
      setPage("signInPage", true);
      history.push('./signIn');
    }

  }

  return (
    <Div container onClick={handleGotoAddProperty}>
        <Title gray bold section>Get your propery rented now!</Title>
        <Div wrapper>
          <img src={realEstateAgent} alt="Real estate agent"/>
          <Div detailsWrapper>
            <Paragraph> 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
            <Button secondary>Advertise Property</Button>
          </Div>
        </Div>
    </Div>
  );
}

export default HomeAddProperty;
