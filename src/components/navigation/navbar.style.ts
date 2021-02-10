import styled, {css} from "styled-components/macro";

interface INavbars {
  primary?: boolean,
  secondary?: boolean,
}

const Navbar = styled.div<INavbars>`
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

export default Navbar;