import styled, {css} from "styled-components/macro";
import { Link } from "react-router-dom";

interface INavbars {
  primary?: boolean,
  secondary?: boolean,
  toFixPosition?: boolean
}

export const Div = styled.div``

export const Navbar = styled.nav<INavbars>`
  position: ${({toFixPosition}) =>  toFixPosition ? "fixed" : "relative"};
  background: ${({toFixPosition}) =>  toFixPosition ? "rgba(250,250,250, 0.9)" : "transparent"};
  top:0%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  z-index: 100;
  height: 5rem;
  align-items: center;
  color: ${({theme}) => theme.color.white};
  justify-content: space-between;
  @media ${({theme}) => theme.media.laptop} { 
    padding-left: 2rem;
  }

  ${({primary}) => primary &&
    css`
    background: ${({theme}) => theme.color.primary};
    `
  };

  ${({secondary}) => secondary &&
    css`
    background: ${({theme}) => theme.color.secondary};
    `
  };
  
`

export const IconMenu = styled.div`
  cursor: pointer;
  margin-top: .1rem;
  margin-right: 1.5rem;
  &:hover div:nth-child(2){
    width: 3rem;
  }

  @media ${({theme}) => theme.media.laptop} { 
    &:hover div,
    &:hover div:nth-child(2){
      background: ${({theme}) => theme.color.primary};
      width: 4rem;
    }
  }
  
  & div {
    transition: all .3s;
    height: .4rem;
    background: ${({theme}) => theme.color.blackLightest};
  }
  & div:first-child {
    width: 3rem;
  }
  & div:nth-child(2) {
    width: 2.5rem;
    margin-top: .8rem;

  }
  & div:last-child {
    width: 3rem;
    margin-top: .8rem;
  }
`;

export const ImageLink = styled(Link)`
  width: 100%;
`

export const ImageLogo = styled.img`
  width: 100%;
`

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`
export const NavbarRight = styled.div`
  display: none;
  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
  }
`

