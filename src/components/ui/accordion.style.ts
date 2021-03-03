import styled from "styled-components/macro";
import arrow from '../../assets/icon/right-arrow-black.svg';

interface IAccordion {
  showPanel?: boolean,
  colorTitle?: string,
  colorPanel?: string,
  bgColorPanel?: string,
  bgColorTitle?: string,
  rotateArrow?: boolean,
}


export const Accordion = styled.div`
  
`

export const AccordionButton = styled.div<IAccordion>`
  transition: all .3s;
  background: ${({ bgColorTitle, theme}) => {
    if(bgColorTitle){
      return bgColorTitle;
    } else {
      return theme.color.white;
    }; 
  }};
  color: ${({ colorTitle, theme}) => {
    if(colorTitle){
      return colorTitle;
    } else {
      return theme.color.blackLight;
    }; 
  }};
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  transition: all .5s;
  display: inline-block;
  &:before {
    transition: all .5s;
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 2rem;
    position: absolute;
    top: 50%;
    left: 0%; 
    transform: 
      ${({rotateArrow}) => {
      if(rotateArrow) {
        return " translate(0%, -50%) rotate(90deg)";
      } else {
        return "translate(0%, -50%) rotate(0deg)";
      }
    }};
    z-index: 99999;
  }
  @media ${props => props.theme.media.laptop} { 
    &:hover {
      cursor: pointer;
      color:  ${({theme}) => theme.color.secondary};
    }
  }
`

export const AccordionPanel = styled.div<IAccordion>`
  background: ${({ bgColorPanel, theme}) => {
    if(bgColorPanel){
      return bgColorPanel;
    } else {
      return theme.color.grayLightBlue;
    }; 
  }};
  color: ${({ colorTitle, theme}) => {
    if(colorTitle){
      return colorTitle;
    } else {
      return theme.color.blackLight;
    }; 
  }};
  display: ${({showPanel}) => showPanel ? "block" : "none"};
  padding: 2rem;
`


