import styled, {css} from "styled-components";

interface IButton {
  primary?: boolean,
  secondary?: boolean,
  width?: string,
  widthMobile?: string,
  widthTablet?: string,
  widthLaptop?: string,
  color?: string,
}

export const Button = styled.button<IButton>`
  width: ${props => props.width ||  props.widthMobile ? props.width ||  props.widthMobile : "100%"};
  color: ${props => props.color ||  props.color ? props.color : props.theme.color.white};
  height: 5rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2.2rem;
  border: none;
  outline: none;
  min-width: 5%;

  @media ${props => props.theme.media.tablet} { 
    width: ${props => props.widthTablet ? props.widthTablet : "70%"};
    font-size: 1.8rem;
  }

  @media ${props => props.theme.media.laptop} { 
    width: ${props => props.widthLaptop ? props.widthLaptop : "30%"};

  }
  
  ${({primary}) => primary &&
    css`
    background: ${props => props.theme.color.primary};
    &:hover {
      background: ${props => props.theme.color.secondary};
    }
    `
  };

  ${({secondary}) => secondary &&
    css`
     background: ${props => props.theme.color.secondary};
    &:hover {
      background: ${props => props.theme.color.primary};
    }
    `
  };


  
`
