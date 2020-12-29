import styled from "styled-components/macro";


export const Container = styled.div`
  padding: 4rem 1.5rem;
  text-align: center;
  @media ${props => props.theme.media.laptop} { 
    text-align: left;
    padding: 2rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & div:first-child {
    @media ${props => props.theme.media.laptop} { 
      padding-right: 4rem;
    }
    & p:first-child {
      font-size: 3rem;
      @media ${props => props.theme.media.laptop} { 
        font-size: 5rem;
      }
    }
    & p:last-child {
      font-size: 2rem;
      @media ${props => props.theme.media.laptop} { 
        font-size: 3rem;
      }
    }
  }
  
`
