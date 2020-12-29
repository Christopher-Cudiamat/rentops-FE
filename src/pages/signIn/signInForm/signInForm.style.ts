import styled  from "styled-components";
import { Button } from "../../../components/ui/button.style";
import { Form } from "../../../components/ui/form.style";

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

export const Text = styled.div`
  margin: 1.5rem 0rem 1rem 0rem;
  cursor: pointer;
  font-size: 1.6rem;
  color:  ${({theme}) => theme.color.gray};
  text-align: center;
`