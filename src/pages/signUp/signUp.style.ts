import styled  from "styled-components";
import { Button } from "../../components/ui/button.style";


export const SignUpButton = styled(Button)`
  @media ${props => props.theme.media.tablet} { 
    margin: auto;
    margin-top: 3rem;
    text-align:center;
    width: 80%;
  }
  
`