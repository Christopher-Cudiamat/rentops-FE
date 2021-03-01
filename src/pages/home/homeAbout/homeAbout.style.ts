import styled, {css} from "styled-components";

interface IDiv {
  offersContainer?: boolean,
  offers?: boolean
}

export const Div = styled.div<IDiv>`
  margin-top: 6rem;
  text-align: center;
  background-color: ${({theme}) => theme.color.grayLightBlue};
  padding: 3rem 2rem;
  
  & p:nth-child(2) {
    margin: auto;
    width: 98%;
    font-size: 1.8rem;
    @media ${props => props.theme.media.laptop} { 
      width: 50%;
      margin: auto;
    }
  }

  ${({offersContainer}) => offersContainer &&
    css`
      margin: 0rem;
      padding: 0rem;
      @media ${props => props.theme.media.laptop} { 
        display: flex;
        justify-content: space-evenly;
      }
    `
  };
  ${({offers}) => offers &&
  
    css`
    margin: 3rem 0rem 5rem 0rem;
    padding: 0rem;
    @media ${props => props.theme.media.laptop} { 
      margin: 7rem 0rem 5rem 0rem;
    }
    & p {
      margin-bottom: 3rem;
    }
    & img {
      width: 13rem;
      height: 13rem;
    }
    `
  };
 
`
