import styled  from "styled-components/macro";
import { Button } from "../ui/button.style";
import { Div } from "../ui/div";
import { Paragraph } from "../ui/p.style";

interface IStyledButton {
  isLoading?: boolean,
}

export const Container = styled(Div)``

export const StyledButton = styled(Button)<IStyledButton>`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
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

export const LoaderIcon = styled.img`
  width: 3rem;
  height: 3rem;
`

export const Text = styled(Paragraph)`
  margin: 0rem 0rem 1rem 0rem;
  cursor: pointer;
`