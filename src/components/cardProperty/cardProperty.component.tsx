import React, { useRef } from 'react';
import { 
  CardContainer,
  CardDetails,
  CardTitle, 
  Container, 
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
import { useHistory } from 'react-router-dom';
// import { favoriteProperty } from '../../services/propertyController';
import { isPropertyNew } from '../../utils/dateManager';
// import { IPropertyList } from '../../store/propertyList/propertyList.type';
import {nanoid} from 'nanoid';


const CardProperty: React.FC<ICardPropertyProps> = ({
  data
}) => {
  
  console.log("DATAAA", data);
  const slider = useRef<Slider>(null);
  const history = useHistory();
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

  const handleGoToProperty = (propertyId: string) => {
    history.push({
      pathname: '/property',
      search: `?id=${propertyId}`,
      state: { id: propertyId }
    })
  }

  //To be used when we develop the like functionalities
  // const handleFavoriteProperty = (propertyId: string, userId: string) => {
  //   favoriteProperty(propertyId,userId)
  //     .then(res => {
  //       console.log("RES", res);
  //     })
  // }
  

  return (
    <>
      <Container>
        {data &&
          data.map((el: any) => {
            let isNew = isPropertyNew(el.createdAt);
            console.log("ELLL", el);
            return  <CardContainer 
                      onClick={() => handleGoToProperty(el._id)}
                      key={nanoid()}>
                      <CardTitle>
                        {
                          `${el.propertyInfo.propertyType} in ${el.propertyInfo.location}`
                        }
                      </CardTitle>
                      <Slider ref={slider} {...settings}>
                        { 
                          el.propertyMedia.galleryPhotos.map((el: string) => (  
                            <SlidesContainer key={nanoid()}>
                              <Slides bgImage={el}/>   
                              {
                                isNew &&
                                <TextNew>New</TextNew>   
                              }
                                
                            </SlidesContainer>            
                          ))
                        }
                      </Slider>
                      <CardDetails>
                        <div>
                          <p>
                            ₱{formatAddComa(el.propertyInfo.price)}/monthly
                          </p>
                          <img 
                            src={heartIcon}
                            alt="Like icon"
                          />
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
      </Container>
    </>
  );
}

export default CardProperty;
