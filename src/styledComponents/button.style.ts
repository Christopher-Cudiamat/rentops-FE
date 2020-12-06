import styled, {css} from "styled-components";

interface IButton {
  primary?: boolean,
}


export const Button = styled.button<IButton>`
  width: 80%;
  height: 5rem;
  border-radius: 1rem;
  text-align: center;
  color: ${props => props.theme.color.white};
  font-size: 1.8rem;
  border: none;
  outline: none;
  
  ${({primary}) => primary &&
    css`
    background: ${props => props.theme.color.primary};
    `
  };

  
`

