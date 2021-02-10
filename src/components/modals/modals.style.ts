import styled from "styled-components/macro";

interface IModalsStyle {
  isOpen?: boolean,
}

export const ModalsContainer = styled.div<IModalsStyle >`
  display: ${({isOpen}) => isOpen ? "block" : "none"};
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 999;
`;

export const ModalsUnderlay = styled.div<IModalsStyle >`
  position: fixed;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.5);
`;

export const Modal = styled.div<IModalsStyle>`
  height: auto;
  border-radius: .8rem;
  width: 90%;
  margin: auto;
  background: ${({theme}) => theme.color.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${({theme}) => theme.media.tablet} { 
    width: 60%
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 30%
  }
`;

export const ModalCloseIcon = styled.img<IModalsStyle>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 3%;
  right: 3%;
  opacity: 0.7;
  z-index: 9999999;
  cursor: pointer
`;