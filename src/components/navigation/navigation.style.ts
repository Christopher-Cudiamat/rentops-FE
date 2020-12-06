import styled from "styled-components";

export const Div = styled.div`
    & img {
      max-width: 50%;
      @media ${props => props.theme.media.tablet} { 
        width: 30%;
      }
      @media ${props => props.theme.media.laptop} { 
        width: 15%;
        margin-left: 1rem
      }
    }
    & svg {
      margin-top: .8rem;
    }
`