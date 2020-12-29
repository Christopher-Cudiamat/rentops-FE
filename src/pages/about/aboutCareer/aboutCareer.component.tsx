import React from 'react';
import { Button } from '../../../components/ui/button.style';
import { Paragraph } from '../../../components/ui/p.style';
import { Title } from '../../../components/ui/title.style';
import { Container } from './aboutCareer.style';

const AboutCareer = () => {
  return (
    <Container>
        <Title gray sub>
          Become our roomie
        </Title>
        <Paragraph>
          At Zumper, we celebrate individuality, thrive off of collaboration, and recognize each other’s unique contributions. When you join our team, you join our family.
        </Paragraph>
        <Button primary>See open positions</Button>
    </Container>
  );
}

export default AboutCareer;
