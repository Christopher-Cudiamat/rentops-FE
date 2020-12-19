import React from 'react';
import imgPrev from '../../../assets/icon/prev-arrow.svg';
import styled  from "styled-components";

interface CustomPrevArrowPropTypes{
  goToPrev: () => void
}

export const Img = styled.img`
  display: none;

  @media ${props => props.theme.media.tablet} { 
    display: block;
    width: 7rem;
    height: 7rem;
    position: absolute;
    top: 45%;
    left: -1%;
    z-index: 999;
    opacity: 0.6;
    cursor: pointer;
    transition: all .5s;
  }
  @media ${props => props.theme.media.laptop} { 
    &:hover {
      background: ${props => props.theme.color.black};
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
