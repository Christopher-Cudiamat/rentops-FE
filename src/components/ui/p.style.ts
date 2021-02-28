import styled, {css}  from "styled-components";

interface IPharagrap {
  primary?: boolean,
  secondary?: boolean,
  main?: boolean,
  sub?: boolean,
  bold?: boolean,
  medium?: boolean,
  white?: boolean,
  gray?: boolean,
  error?: boolean,
}

export const Paragraph = styled.p<IPharagrap>`
  font-size: 1.6rem;
  color: ${({theme}) => theme.color.blackLight};
  line-height: 3rem;

  ${({medium}) => medium &&
    css`
    font-size: 1.8rem;
    margin-bottom: 3rem;
    `
  };
   ${({bold}) => bold &&
    css`
    font-weight: bold;
    `
  };

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
