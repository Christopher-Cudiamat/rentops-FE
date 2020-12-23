import styled  from "styled-components";
import { Button } from "../../../components/ui/button.style";
import { Form } from "../../../components/ui/form.style";
import { Paragraph } from "../../../components/ui/p.style";


export const SignInButton = styled(Button)`
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

export const Text = styled(Paragraph)`
  margin: 0rem 0rem 1rem 0rem;
  cursor: pointer;

`