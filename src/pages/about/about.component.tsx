import React from 'react';
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
