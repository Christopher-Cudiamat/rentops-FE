import styled from "styled-components/macro";
import sortIcon from "../../../assets/icon/sort.svg";
import { Modal } from "../../../components/ui/modal.style";

export const ButtonStyled = styled.div`
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 3.5rem;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    background: url(${sortIcon});
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    height: 1.8rem;
    width: 3rem;
    opacity: 0.7;
    position: absolute;
  }
  @media ${({theme}) => theme.media.laptop} { 
    margin-right: 2rem;
    transition: transform .3s;
    font-size: 1.8rem;
    font-weight: 500;
    &:hover {
      box-shadow: 0 3px 0 0 ${({theme}) => theme.color.primary};
      cursor: pointer;
    } 
  }

`

export const SortModal = styled(Modal)`
  width: 100vw;
  height: 100vh;
  padding: 0rem;
  @media ${({theme}) => theme.media.laptop} { 
    width: 25%;
    height: 100vh;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate(0%,0%);
  }
`

export const SortText = styled.p`
  font-size: 2.5rem;
  border-bottom: 1px solid ${({theme}) => theme.color.grayLightest}; 
  margin-bottom: 0rem;
  padding: 1rem 2rem;
  @media ${({theme}) => theme.media.laptop} { 
    font-size: 2rem;
    transition: color .4s;
    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.color.primary};
    }
  }
`