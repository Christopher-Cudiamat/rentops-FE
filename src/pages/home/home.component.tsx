import React from 'react';
import CarouselCities from '../../components/carouselCities/carouselCities.component';
import HeaderForm from './headerForm/headerForm.component';
import { topNcrCityList } from './home.config';

const Home = () => {
  return (
    <>
      <HeaderForm/>
      <CarouselCities sliderArr={topNcrCityList} />
    </>
  );
}

export default Home;
