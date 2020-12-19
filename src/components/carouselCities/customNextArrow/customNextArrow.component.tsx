import React from 'react';
import imgNext from '../../../assets/icon/next-arrow.svg';
import styled  from "styled-components";

interface CustomPrevArrowPropTypes{
  goToNext: () => void
}

export const Img = styled.img`
  display: none;
  @media ${props => props.theme.media.tablet} { 
    display: block;
    width: 7rem;
    height: 7rem;
    position: absolute;
    top: 45%;
    right: -1%;
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

const CustomNextArrow: React.FC<CustomPrevArrowPropTypes> = ({goToNext}) => {
  return (
    <Img src={imgNext} alt="Arrow Previous" onClick={goToNext}/>
  );
}

export default CustomNextArrow;
