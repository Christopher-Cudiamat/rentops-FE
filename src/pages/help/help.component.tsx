import React from 'react';
import { ButtonLink } from '../../components/ui/buttonLink.style';
import { Title } from '../../components/ui/title.style';
import { 
  Container, 
  DivContact, 
  ImageBanner,
  ImageBannerContainer
} from './help.style';
import help from '../../assets/images/help.jpg';
import HelpTabs from './helpTabs/helpTabs.component';
import BackToTopButton from '../../components/backToTopButton/backToTopButton.component';



const Help = () => {
 
  return (
    <>
      <Title page bold>
        How can we help you?
      </Title>
      <ImageBannerContainer>
        <ImageBanner src={help} alt="help"/>
      </ImageBannerContainer>
      <HelpTabs />
      <Container>
        <DivContact>
          <ButtonLink
            to="./contact">
            Contact us for more info
          </ButtonLink>
        </DivContact> 
      </Container>
      <BackToTopButton />
    </>
  );
}

export default Help;
