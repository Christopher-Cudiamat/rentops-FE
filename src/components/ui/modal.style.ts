import styled from "styled-components/macro";

interface IModal {
  fullWidth?: boolean,
  fullHeight?: boolean,
}

export const Modal = styled.div<IModal>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  background: ${({theme}) => theme.color.white};
  border: none;
  outline: none;
  padding: 2rem;
`