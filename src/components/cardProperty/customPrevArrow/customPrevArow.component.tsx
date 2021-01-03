import React from 'react';
import imgPrev from '../../../assets/icon/prev-arrow.svg';
import styled  from "styled-components/macro";

interface CustomPrevArrowPropTypes{
  goToPrev: () => void
}

export const Img = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  left: 0%;
  z-index: 999;
  opacity: 0.6;
  cursor: pointer;
  transition: all .5s;
  
  @media ${({theme}) => theme.media.laptop} { 
    &:hover {
      background: ${({theme}) => theme.color.black};
      padding: 1rem;
    }
  }
`

const CustomPrevArrow: React.FC<CustomPrevArrowPropTypes> = ({goToPrev}) => {
  return (
    <Img src={imgPrev} alt="Arrow Previous" onClick={goToPrev}/>
  );
}

export default CustomPrevArrow;
