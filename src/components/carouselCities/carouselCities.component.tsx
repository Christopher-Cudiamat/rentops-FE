import React, { useRef } from 'react';
import Slider from "react-slick";
import { CarouselCitiesPropTypes, sliderList } from './carouselCities.type';
import CustomPrevArrow from './customPrevArrow/customPrevArow.component';
import CustomNextArrow from './customNextArrow/customNextArrow.component';
import { Div, P } from './carouselCities.style';
import './carouselCities.css'
import { Title } from '../ui/title.style';

const CarouselCities: React.FC<CarouselCitiesPropTypes> = ({
  sliderArr
  }) => {

  const slider = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "slideCity variable-width",
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow goToNext={() => slider.current!.slickNext()}/>,
    prevArrow: <CustomPrevArrow goToPrev={() => slider.current!.slickPrev()}/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
          infinite: true,
        }
      },
    ]
  };


  return (
    <Div carouselContainer>
      <Title gray section bold>Top Cities</Title>
        <Slider ref={slider} {...settings}>
          {
            sliderArr.map((el:sliderList, index: number) => (
              <Div container key={index}>
                <Div imageWrapper>
                  <img src={el.cityImage} alt={el.cityAltText}/>
                  <P>{el.cityName}</P>
                </Div>
              </Div>
            ))
          }
        </Slider>
    </Div>
  );
}

export default CarouselCities;
