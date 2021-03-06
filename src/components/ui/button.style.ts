import styled, {css} from "styled-components";
import backArrow from '../../assets/icon/back-arrow.svg';
interface IButton {
  primary?: boolean,
  secondary?: boolean,
  tertiary?: boolean,
  width?: string,
  widthMobile?: string,
  widthTablet?: string,
  widthLaptop?: string,
  color?: string,
  align?: string
}

export const Button = styled.button<IButton>`
  width: ${({width,widthMobile}) => width || widthMobile ? width || widthMobile : "100%"};
  color: ${({color, theme}) => color ? color : theme.color.white};
  height: 5rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2.2rem;
  border: none;
  outline: none;
  min-width: 5%;
  transition: all .7s;

  @media ${({theme}) => theme.media.tablet} { 
    width: ${({widthTablet}) => widthTablet ? widthTablet : "70%"};
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

  ${({tertiary}) => tertiary &&
    css`
     background: ${({theme}) => theme.color.tertiary};
    &:hover {
      background: ${({theme}) => theme.color.primary};
    }
    `
  };
`


export const ButtonBack = styled.button<IButton>`
  color: ${({theme}) => theme.color.gray};
  background: transparent;
  font-size: 1.8rem;
  border: none;
  outline: none;
  position: relative;
  padding-left: 3.5rem;
  &:before {
    content: "";
    background: url(${backArrow});
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 3rem;
    width: 3rem;
    opacity: 0.5;
  }
`
export const ButtonContainer = styled.div<IButton>`
  text-align: ${({align}) => align ? align : "left"};
  margin-top: 4rem;

  @media ${({theme}) => theme.media.laptop} { 
    margin-top: 5rem;
  }
  
`

