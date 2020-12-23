import styled  from "styled-components";
import { Button } from "../../../components/ui/button.style";
import { Form } from "../../../components/ui/form.style";



export const ContinueButton = styled(Button)`
  margin-top: 3rem;
  @media ${props => props.theme.media.tablet} { 
    margin: auto;
    margin-top: 3rem;
    text-align:center;
    width: 80%;
  }
  
`

export const FormControl = styled(Form)`
  padding: 6rem 2rem;
  margin: auto;
`
