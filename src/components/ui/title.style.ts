import styled, {css}  from "styled-components";

interface IDiv {
  primary?: boolean,
  secondary?: boolean,
  main?: boolean,
  sub?: boolean,
  bold?: boolean,
  black?: boolean,
  white?: boolean,
  gray?: boolean,
  section?: boolean,
}


export const Title = styled.p<IDiv>`
  margin-bottom: 0rem;
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

  ${({main}) => main &&
    css`
    font-size: 3rem;
    `
  };

  ${({section}) => section &&
    css`
    font-size: 2.5rem;
    @media ${({theme}) => theme.media.tablet} { 
      margin-bottom: 4rem;
    }
    `
  };

  ${({sub}) => sub &&
    css`
    font-size: 2.5rem;
    `
  };

  ${({bold}) => bold &&
    css`
    font-weight: bold;
    `
  };

  ${({black}) => black &&
    css`
    color: ${({theme}) => theme.color.black};
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
`
export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 2rem 1rem;
  align-items: center;
`