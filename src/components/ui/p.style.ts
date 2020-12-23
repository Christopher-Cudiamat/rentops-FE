import styled, {css}  from "styled-components";

interface IPharagrap {
  primary?: boolean,
  secondary?: boolean,
  main?: boolean,
  sub?: boolean,
  bold?: boolean,
  white?: boolean,
  gray?: boolean,
  error?: boolean,
}

export const Paragraph = styled.p<IPharagrap>`
  font-size: 1.6rem;

  ${({primary}) => primary &&
    css`
    color: ${({theme}) => theme.color.primary};
    `
  };

  ${({secondary}) => secondary &&
    css`
    color: ${({theme}) => theme.color.secondary};
    `
  };

  ${({bold}) => bold &&
    css`
    font-weight: bold;
    `
  };

  ${({white}) => white &&
    css`
    color: ${({theme}) => theme.color.white};
    `
  };
  ${({gray}) => gray &&
    css`
    color: ${({theme}) => theme.color.gray};
    `
  };

  ${({error}) => error &&
    css`
    color: ${({theme}) => theme.color.error};
    `
  };
`
