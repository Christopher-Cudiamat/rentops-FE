import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 3rem 1.3rem;
  text-align: center;
  @media ${({theme}) => theme.media.tablet} { 
    padding: 3rem 1.8rem;
  }
  @media ${({theme}) => theme.media.laptop} { 
    padding: 3rem;
  }

  & > p:first-child {
   text-align: left;
   position: absolute;
   top: 3%;
   left: 3%;
  }

  & > div:nth-child(2){
    margin-top: 5rem;
    & > label {
      font-weight: 500;
      margin-bottom: 1rem;
      font-size: 1.6rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      color: ${({theme}) => theme.color.blackLight}
    }
    & div > input {
      text-align: center;
    }
    
  }
  & > div:nth-child(3){
    margin-top: 4rem;
  }

  & > div:nth-child(2),
  & > div:nth-child(3){
    padding: 0rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  & button {
    width: 100%;
    margin-top: 3rem;
  }
  
`;