import React, { useRef } from 'react';
import { 
  CardContainer,
  CardDetails,
  CardTitle, 
  Slides,
  SlidesContainer,
  TextNew
} from './cardProperty.style';
import { ICardPropertyProps } from './cardProperty.type';
import CustomNextArrow from './customNextArrow/customNextArrow.component';
import CustomPrevArrow from './customPrevArrow/customPrevArow.component';
import { formatAddComa } from '../../utils/formatNumbers';
import heartIcon from '../../assets/icon/nav/like.svg'
import Slider from "react-slick";

const CardProperty: React.FC<ICardPropertyProps> = ({data}) => {
  console.log("CP",data)

  const slider = useRef<Slider>(null);
  // const secondsCreated = Math.floor(data.personalList.createdAt.getTime() / 1000 / 1000);
  // console.log(data.personalList.propertyInfo.createdAt && data.personalList.propertyInfo.createdAt);


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
        data.map((el:any,index: number) => {
        
          return  <CardContainer key={index}>
                    <CardTitle>
                      {`${el.propertyInfo.propertyType} in ${el.propertyInfo.location}`}
                    </CardTitle>
                    <Slider ref={slider} {...settings}>
                      {
                        el.propertyMedia.galleryPhotos.map((el: any, index: number) => (  
                          <SlidesContainer key={index}>
                            <Slides 
                            bgImage={el.dataURL}/>   
    
                            <TextNew>New</TextNew>    
                              
                          </SlidesContainer>            
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
        })
      } 
    </>
  );
}

export default CardProperty;
