import styled  from "styled-components/macro";
import { Button } from "../ui/button.style";
import { Div } from "../ui/div";
import { Paragraph } from "../ui/p.style";


export const Container = styled(Div)`

`

export const StyledButton = styled(Button)`
  margin-top: 2rem;
  @media ${props => props.theme.media.tablet} { 
    margin: auto;
    margin-top: 3rem;
    text-align:center;
    width: 80%;
  }
`
export const ErrorMessage = styled(Paragraph)`
  text-align: center;
  padding: 0rem 1rem;
`

export const Text = styled(Paragraph)`
  margin: 0rem 0rem 1rem 0rem;
  cursor: pointer;
`