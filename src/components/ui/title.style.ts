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
  header?: boolean,
  headerSub?: boolean,
  page?: boolean
}


export const Title = styled.p<IDiv>`
  margin-bottom: 2rem;
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

  ${({header}) => header &&
    css`
    font-size: 3rem;
    @media ${({theme}) => theme.media.tablet} { 
      font-size: 5rem;
    }
    @media ${({theme}) => theme.media.laptop} { 
      font-size: 5rem;
    }
    `
  };

  ${({headerSub}) => headerSub &&
    css`
    font-size: 2rem;
    @media ${({theme}) => theme.media.tablet} { 
      font-size: 3.5rem;
    }
    @media ${({theme}) => theme.media.laptop} { 
      font-size: 2.5rem;
    }
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

  ${({page}) => page &&
    css`
    margin-top: 1rem;
    padding: 1rem;
    background: ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.white};
    font-size: 2.2rem;
    @media ${({theme}) => theme.media.tablet} { 
      font-size: 2.8rem;
      padding: 1rem 2rem;
    }
    @media ${({theme}) => theme.media.laptop} { 
      font-size: 3rem;
      padding: 1rem 4rem;
    }
    `
  };
`
export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 2rem 1rem;
  align-items: center;
`