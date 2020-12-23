import styled  from "styled-components";
import { Button } from "../../../components/ui/button.style";
import { Paragraph } from "../../../components/ui/p.style";

export const DivContainer = styled.div`
  padding: 3rem 2rem 15rem 2rem;
  @media ${props => props.theme.media.tablet} { 
    margin: auto;
    width: 65%;
  }
  @media ${props => props.theme.media.tablet} { 
    width: 30%;
  }
`
export const Text = styled(Paragraph)`
  margin: 3rem 0rem;
  font-size: 1.8rem;
`

export const VerifyButton = styled(Button)`
  margin-top: 4rem;
`