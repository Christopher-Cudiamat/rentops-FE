import styled from "styled-components/macro";


export const Container = styled.div`
  padding: 0rem 1rem;
  position: relative;
  margin-top: -12rem;
  @media ${props => props.theme.media.laptop} { 
    padding: 2rem  10rem;
    margin-top: 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div {
    background:  ${({theme}) => theme.color.grayLightest};
    padding: 10rem 2rem 8rem 2rem;
    @media ${props => props.theme.media.laptop} { 
      padding: 3rem 4rem;
    }
  }

  & div > div:first-child{
    & p:first-child {
      font-size: 2.5rem;
      @media ${props => props.theme.media.laptop} { 
        font-size: 3rem;
      }
    }
    & p:last-child {
      font-size: 1.8rem;
      @media ${props => props.theme.media.laptop} { 
        font-size: 2rem;
      }
    }
  }

  & div > div {
    & p:first-child {
      font-size: 2.2rem;
    }
    & p:last-child {
      font-size: 1.8rem;
      margin-bottom: 3rem;
      @media ${props => props.theme.media.laptop} { 
        font-size: 1.8rem;
      }
    }
  }

  & img {
    margin-top: -12rem;
    @media ${props => props.theme.media.laptop} { 
      margin-top: -0rem;
      order: -1;
      padding-right: 4rem;
    }
  }
  
`
