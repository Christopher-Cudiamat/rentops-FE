import styled from "styled-components/macro";


export const Container = styled.div`
  text-align:center;
  margin: 15rem auto;
  border: 10px dashed ${({theme}) => theme.color.secondary};
  @media ${props => props.theme.media.laptop} { 
    width: 50%;
    padding: 4rem 2rem;
    border: 8px dashed ${({theme}) => theme.color.secondary};
  }
  
`
