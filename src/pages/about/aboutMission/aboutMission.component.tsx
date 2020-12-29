import React from 'react';
import { Title } from '../../../components/ui/title.style';
import { Container } from './aboutMission.style';
import aboutMission from "../../../assets/images/about-mission.png";

const AboutMission = () => {
  return (
    <Container>
      <div>
        <Title black main bold>
          Welcome to modern renting
        </Title>
        <Title gray bold>
          We’re on a mission to make renting a seamless and stress-free experience for everyone. One landlord, listing, and renter at a time.
        </Title>
      </div>
      <img src={aboutMission} alt="Real estate deals"/> 
    </Container>
  );
}

export default AboutMission;
