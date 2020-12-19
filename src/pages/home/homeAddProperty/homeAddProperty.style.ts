import styled, {css} from "styled-components";

interface IDiv {
  detailsWrapper?: boolean,
  wrapper?: boolean,
  container?: boolean,
}

export const Div = styled.div<IDiv>`
  text-align: center;
  & p:first-child {
    width: 100%;
  }
  & img {
    margin: auto;
    margin-bottom:  2rem;
    @media ${props => props.theme.media.laptop} { 
      tablet: 50%;
    }
  }
  & button {
    margin: auto;
  }
  ${({container}) => container &&
    css`
     padding: 2rem 1rem 8rem 1rem;
    `
  };

  ${({wrapper}) => wrapper &&
    css`
    @media ${props => props.theme.media.laptop} { 
      display: flex;
      justify-content:center;
      width: 90%;
      margin: auto;
    }
    `
  };
  
  ${({detailsWrapper}) => detailsWrapper &&
    css`
    & p {
      margin-bottom: 3rem;
    }
    padding: 0rem;
    @media ${props => props.theme.media.laptop} { 
      margin-top: 5rem;
      padding: 0rem 0rem 0rem 4rem;
      & p {
        font-size: 2rem;
        margin-bottom: 5rem;
      }
      & button {
        width: 60%;
      }
    }
    `
  };
`
