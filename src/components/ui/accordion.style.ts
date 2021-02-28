import styled from "styled-components/macro";
import { keyframes } from 'styled-components';
import arrow from '../../assets/icon/bath.svg';

interface IAccordion {
  showPanel?: boolean;
}


const slideUp = keyframes`
  0% { height: 100%; }
  100% { height: 0%; }
`
const slideDown = keyframes`
  100% { height: 0%; }
  100% { height: 100%; }
`


export const Accordion = styled.div`
  
`

export const AccordionButton = styled.div`
  background: ${({theme}) => theme.color.grayLightest};
  color: ${({theme}) => theme.color.blackLight};
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  &:before {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    opacity: 0.4;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0rem;
    left: 0rem;   
    z-index: 99999;
  }
`

export const AccordionPanel = styled.div<IAccordion>`
   background: ${({theme}) => theme.color.white};
  /* height: 0%;
  animation-name: ${
    ({showPanel}) => showPanel ? slideDown : slideUp
  };
  animation-duration: .3s; */
  display: ${({showPanel}) => showPanel ? "block" : "none"};
  padding: 2rem;
`
 /* display: ${({showPanel}) => showPanel ? "block" : "none"} */
   /* animation-name: ${
    ({showPanel}) => showPanel ? slideDown : slideUp
  }; */

