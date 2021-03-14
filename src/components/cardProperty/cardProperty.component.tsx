import React, { useRef } from "react";
import {
  CardContainer,
  CardDetails,
  CardTitle,
  Container,
  Slides,
  SlidesContainer,
  TextNew,
} from "./cardProperty.style";
import { ICardPropertyProps } from "./cardProperty.type";
import CustomNextArrow from "./customNextArrow/customNextArrow.component";
import CustomPrevArrow from "./customPrevArrow/customPrevArow.component";
import { formatAddComa } from "../../utils/formatNumbers";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { isPropertyNew } from "../../utils/dateManager";
import { nanoid } from "nanoid";
import LikeButton from "./../likeButton/likedButton.container";
import { favoriteProperty } from "../../services/propertyController";
import { setLikes } from "../../store/userAuth/userAuth.action";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../configs/redux.config";

const CardProperty: React.FC<ICardPropertyProps> = ({ data }) => {
  const isAuthenticated = useSelector(
    (state: AppState) => state.userAuth.isAuthenticated
  );
  const dispatch = useDispatch();
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
    nextArrow: <CustomNextArrow goToNext={() => slider.current!.slickNext()} />,
    prevArrow: <CustomPrevArrow goToPrev={() => slider.current!.slickPrev()} />,
  };

  const handleGoToProperty = (propertyId: string) => {
    history.push({
      pathname: "/property",
      search: `?id=${propertyId}`,
      state: { id: propertyId },
    });
  };

  const handleOnClickLike = (
    e: React.SyntheticEvent,
    propertyId: string,
    userId: string
  ) => {
    e.stopPropagation();

    if (isAuthenticated) {
      favoriteProperty(propertyId, userId).then((res) => {
        dispatch(setLikes(res.likes));
      });
    } else {
      history.push("/signIn");
    }
  };

  return (
    <>
      <Container>
        {data &&
          data.map((el: any) => {
            let isNew = isPropertyNew(el.createdAt);
            return (
              <CardContainer
                onClick={() => handleGoToProperty(el._id)}
                key={nanoid()}
              >
                <CardTitle>
                  {`${el.propertyInfo!.propertyType} in ${
                    el.propertyInfo.location
                  }`}
                </CardTitle>
                <Slider ref={slider} {...settings}>
                  {el.propertyMedia.galleryPhotos.map((el: string) => (
                    <SlidesContainer key={nanoid()}>
                      <Slides bgImage={el} />
                      {isNew && <TextNew>New</TextNew>}
                    </SlidesContainer>
                  ))}
                </Slider>
                <CardDetails>
                  <div>
                    <p>₱{formatAddComa(el.propertyInfo.price)}/monthly</p>
                    <div onClick={(e) => handleOnClickLike(e, el._id, el.user)}>
                      <LikeButton propertyId={el._id} />
                    </div>
                  </div>
                  <div>
                    <p>{el.propertyInfo.furnish}</p>
                    <p>{el.propertyInfo.bed}</p>
                    <p>{el.propertyInfo.bathroom}</p>
                  </div>
                </CardDetails>
              </CardContainer>
            );
          })}
      </Container>
    </>
  );
};

export default CardProperty;
