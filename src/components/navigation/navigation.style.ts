import styled, {css} from "styled-components/macro";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const Div = styled.div`

`

interface INavbars {
  primary?: boolean,
  secondary?: boolean,
}

export const Navbar = styled.nav<INavbars>`
  position:relative;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  z-index: 100;
  height: 5rem;
  align-items: center;
  color: ${({theme}) => theme.color.white};
  justify-content: space-between;

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
  margin-top: .3rem;
  margin-right: 1.4rem;
  &:hover div,
  &:hover div:nth-child(2){
    background: ${({theme}) => theme.color.primary};
    width: 4rem;
  }
  
  & div {
    transition: all .3s;
    height: .5rem;
    background: ${({theme}) => theme.color.blackLightest};
  }
  & div:first-child {
    height: .5rem;
    width: 4rem;
  }
  & div:nth-child(2) {
    height: .5rem;
    width: 3rem;
    margin-top:.8rem;

  }
  & div:last-child {
    height: .5rem;
    width: 4rem;
    margin-top:.8rem;

  }
`;

export const IconSearchContainer = styled.div`
  cursor: pointer;
  &:hover svg path {
    fill: ${({theme}) => theme.color.primary};
  }
`

export const IconSearch = styled(SVG)`
  width: 3.2rem;
  height: 3.2rem;
  @media ${({theme}) => theme.media.laptop} { 
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const ImageLink = styled(Link)`
  width: 60%;
  @media ${({theme}) => theme.media.laptop} { 
    width: 65%;
  }
`

export const ImageLogo = styled.img`
  width: 100%;
  @media ${({theme}) => theme.media.tablet} { 
    width: 30%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 100%;
    margin-left: 1rem;
  }
`

export const NavbarLeft = styled.div`
  display: flex;
`
export const NavbarRight = styled.div`
  display: flex;
`

// export const NavButtonContainer = styled.div`
//   display: none;
//   @media ${({theme}) => theme.media.laptop} { 
//     display: flex;
//   }
// `
