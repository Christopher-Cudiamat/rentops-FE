import React, { useRef } from 'react';
import { CardContainer, CardDetails, CardTitle, Slides } from './cardProperty.style';
import { ICardPropertyProps } from './cardProperty.type';
import CustomNextArrow from './customNextArrow/customNextArrow.component';
import CustomPrevArrow from './customPrevArrow/customPrevArow.component';
import { formatAddComa } from '../../utils/formatNumbers';
import heartIcon from '../../assets/icon/nav/like.svg'
import Slider from "react-slick";

const CardProperty: React.FC<ICardPropertyProps> = ({data}) => {
  console.log("CP",data)

  const slider = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slideCity variable-width",
    adaptiveHeight: false,
    nextArrow: <CustomNextArrow goToNext={() => slider.current!.slickNext()}/>,
    prevArrow: <CustomPrevArrow goToPrev={() => slider.current!.slickPrev()}/>,

  };
  return (
    <>
        {
        data.map((el:any) => 
          <CardContainer key={el.id}>
            <CardTitle>
              {`${el.propertyInfo.propertyType} in ${el.propertyInfo.location}`}
            </CardTitle>
            <Slider ref={slider} {...settings}>
              {
                el.propertyMedia.galleryPhotos.map((el: any, index: number) => (  
                  <Slides 
                  key={index}
                  bgImage={el.dataURL}/>                              
                ))
              }
            </Slider>
            <CardDetails>
              <div>
              <p> ₱{formatAddComa(el.propertyInfo.price)}/monthly</p>
              <img src={heartIcon} alt="Like icon"/>
            </div>
            <div>
              <p>{el.propertyInfo.furnish}</p>
              <p>{el.propertyInfo.bed}</p>
              <p>{el.propertyInfo.bathroom}</p>
            </div>
            </CardDetails>
          </CardContainer>
        )
      } 
    </>
  );
}

export default CardProperty;
