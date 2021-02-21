import styled from "styled-components/macro";

export const FormContainer = styled.div`
  padding: 4rem 2rem 10rem 2rem;
  margin: auto;
  width: 100%;
  text-align: center;
  @media ${({theme}) => theme.media.tablet} { 
    width:70%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width:50%;
  }
`