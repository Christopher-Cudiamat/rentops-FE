import styled, {css}  from "styled-components";

interface IPharagrap {
  primary?: boolean,
  secondary?: boolean,
  main?: boolean,
  sub?: boolean,
  bold?: boolean,
  white?: boolean,
  gray?: boolean,
}


export const P = styled.p<IPharagrap>`
  font-size: 1.6rem;

  ${({primary}) => primary &&
    css`
    color: ${props => props.theme.color.primary};
    `
  };

  ${({secondary}) => secondary &&
    css`
    color: ${props => props.theme.color.secondary};
    `
  };

  ${({bold}) => bold &&
    css`
    font-weight: bold;
    `
  };

  ${({white}) => white &&
    css`
    color: ${props => props.theme.color.white};
    `
  };
  ${({gray}) => gray &&
    css`
    color: ${props => props.theme.color.gray};
    `
  };
`
