import React from 'react';
import CarouselCities from '../../components/carouselCities/carouselCities.container';
import HomeSearchForm from './homeSearchForm/homeSearchForm.component';
import { topNcrCityList } from './home.config';
import HomeAbout from './homeAbout/homeAbout.component';
import HomeAddProperty from './homeAddProperty/homeAddProperty.container';


const Home: React.FC = () => {
  
  return (
    <>
      <HomeSearchForm/>
      <CarouselCities sliderArr={topNcrCityList}/>
      <HomeAbout/>
      <HomeAddProperty/>
    </>
  );
}

export default Home;
