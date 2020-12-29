import React from 'react';
import { Title } from '../../../components/ui/title.style';
import { Container } from './aboutValues.styles';
import aboutValues from "../../../assets/images/about-team.jpg"
import { Paragraph } from '../../../components/ui/p.style';
import { aboutValuesArr } from './aboutValues.config';

const AboutValues = () => {
  return (
    <Container>
      <div>
        {
          aboutValuesArr.map((el:{title:string,text:string},index: number) =>
          <div key={index}>
            <Title bold>{el.title}</Title>
            <Paragraph>{el.text}</Paragraph>
          </div>
          )
        }
      </div>
      <img src={aboutValues} alt="Real estate"/> 
    </Container>
  );
}

export default AboutValues;
