import React from 'react';
import Slider from "react-slick";
import { CarouselCitiesPropTypes } from './carouselCities.type';
import './carouselCities.css'
import { Div } from './carouselCities.style';

const CarouselCities: React.FC<CarouselCitiesPropTypes> = ({
  sliderArr
  }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "slideCity variable-width",
    adaptiveHeight: true,
    arrows: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <div style={{marginTop: "63rem"}}>
      <h2 style={{fontSize: "3rem",marginBottom: "2rem"}}>Top Cities</h2>
        <Slider {...settings}>
          {
            sliderArr.map((el:any, index: number) => (
              <Div container key={index}>
                <Div imageWrapper>
                <img src={el.cityImage} alt={el.cityAltText}/>
                <p style={{
                fontSize: "2rem",
                position: "absolute",
                left:"0%",
                bottom: "0%",
                zIndex: 999,
                background:"rgba(0,0,0,0.7)",
                color:"white",
                marginBottom: "0rem",
                padding: "1rem 6rem 1rem 1.5rem",
                clipPath: "polygon(0 0, 71% 0, 100% 100%, 0% 100%)",
                }}>{el.cityName}
                </p>
                </Div>
              </Div>
            ))
          }
        </Slider>
    </div>
  );
}

export default CarouselCities;
