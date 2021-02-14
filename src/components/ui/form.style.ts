import styled  from "styled-components";

export const Form = styled.form`
  margin: auto;
  width: 100%;
  @media ${({theme}) => theme.media.tablet} { 
    width:70%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width:35%;
  }
  
`