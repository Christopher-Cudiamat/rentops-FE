import React from 'react';
import { Button } from '../../components/ui/button.style';
import { Paragraph } from '../../components/ui/p.style';
import { Title } from '../../components/ui/title.style';
import AboutCareer from './aboutCareer/aboutCareer.component';
import AboutMission from './aboutMission/aboutMission.component';
import AboutValues from './aboutValues/aboutValues.component';

const About = () => {
  return (
    <>
      <AboutMission/>
      <AboutValues/>
      <AboutCareer/>
    </>
  );
}

export default About;
