import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

interface IButtonLink {
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  width?: string,
  widthMobile?: string,
  widthTablet?: string,
  widthLaptop?: string,
  color?: string,
}

export const ButtonLink = styled(Link)<IButtonLink>`
  width: ${({width,widthMobile}) => width ||  widthMobile ? width || widthMobile : "100%"};
  color: ${({color,theme}) => color ||  color ? color : theme.color.white};
  background: ${({theme}) => theme.color.primary};
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2.2rem;
  border: none;
  outline: none;
  min-width: 5%;
  text-decoration: none !important;
  transition: all .7s;

  @media ${({theme}) => theme.media.tablet} { 
    width: ${({widthTablet})=> widthTablet ? widthTablet : "70%"};
    font-size: 1.8rem;
  }

  @media ${({theme}) => theme.media.laptop} { 
    width: ${({widthLaptop}) => widthLaptop ? widthLaptop : "30%"};
    font-size: 2rem;
    font-weight: 500;
  }
  
  ${({primary}) => primary &&
    css`
    background: ${({theme}) => theme.color.primary};
    &:hover {
      background: ${({theme}) => theme.color.secondary};
    }
    `
  };

  ${({secondary}) => secondary &&
    css`
     background: ${({theme}) => theme.color.secondary};
    &:hover {
      background: ${({theme}) => theme.color.primary};
    }
    `
  };
  
`


export const AuthButtonLink = styled(Link)<IButtonLink>`
  width: ${({width,widthMobile}) => width ||  widthMobile ? width || widthMobile : "100%"};
  color: ${({color,theme}) => color ||  color ? color : theme.color.white};
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2.2rem;
  border: none;
  outline: none;
  min-width: 5%;
  text-decoration: none !important;
  transition: all .7s;
  margin: 1rem 0rem;
  height: 4rem;
  font-size: 1.6rem;
  display: block;
  &:hover {
    color: ${({theme}) => theme.color.primary}; 
  }

  @media ${({theme}) => theme.media.tablet} { 
    font-size: 1.8rem;
    display: inline;
    margin: 1rem 1rem 1rem 0rem;
    width: 40%;
  }

  @media ${props => props.theme.media.laptop} { 
    width: 100%;
    display: block;
  }
  
  ${({primary}) => primary &&
    css`
    background: ${({theme}) => theme.color.primary};
    &:hover {
      color: ${({theme}) => theme.color.primary}; 
      background: ${({theme}) => theme.color.white};
      border: 2px solid ${({theme}) => theme.color.primary};
    }
    `
  };

  ${({secondary}) => secondary &&
    css`
     background: ${({theme}) => theme.color.secondary};
    &:hover {
      color: ${({theme}) => theme.color.primary}; 
      background: ${({theme}) => theme.color.white};
      border: 2px solid ${({theme}) => theme.color.primary};
    }
    `
  };

  ${({tertiary}) => tertiary &&
    css`
    background: ${({theme}) => theme.color.tertiary};
    &:hover {
      color: ${({theme}) => theme.color.tertiary}; 
      background: ${({theme}) => theme.color.white};
      border: 2px solid ${({theme}) => theme.color.tertiary};
    }
    `
  };
`
