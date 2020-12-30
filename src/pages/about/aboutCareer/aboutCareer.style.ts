import styled from "styled-components/macro";


export const Container = styled.div`
  text-align:center;
  margin: auto;
  padding: 1rem 2rem 4rem 2rem;

  & p:first-child {
    font-size: 3rem;
  }

  & p:nth-child(2) {
    margin: 2rem 0rem 3rem 0rem;
    font-size: 1.8rem;
  }
  @media ${props => props.theme.media.laptop} { 
    margin: 13rem auto;
    width: 50%;
    padding: 4rem 2rem;
    border: 5px dashed ${({theme}) => theme.color.secondary};
  }
  
`
