import styled  from "styled-components/macro";
import { Modal } from "../ui/modal.style";


export const LoaderUnderlay = styled(Modal)`
  height: 100vh;
  width: 100vw;
  opacity: 0.7;
  background: ${({theme}) => theme.color.white};
`

export const LoaderStyled = styled.img`
  width: 9rem;
  height: 9rem;
  position: absolute;
  z-index: 999999999;  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${({theme}) => theme.media.tablet} { 
    width: 10rem;
    height: 10rem;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 12rem;
    height: 12rem;
  }
`





