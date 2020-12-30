import styled  from "styled-components";

export const Form = styled.form`
  margin: auto;
  @media ${({theme}) => theme.media.laptop} { 
    width:35%;
  }
  
`