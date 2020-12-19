import styled  from "styled-components";

interface IForm {

}

export const Form = styled.form<IForm>`
  @media ${props => props.theme.media.laptop} { 
    width:35%;
  }
  
`