import { Stepper } from "react-form-stepper";
import styled  from "styled-components/macro";


export const StepperStyled = styled(Stepper)`
  padding: 6rem 0rem 2.4rem 0rem !important;
  @media ${({theme}) => theme.media.tablet} { 
    width: 70%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 40%;
  }
  margin:auto;
  & > div > div > button {
    background-color: ${({theme}) => theme.color.gray};
    height: 2.5rem;
    width: 2.5rem;
    margin-top: -3px;
  }
  & > div > div > button > span {
    font-size: 1.2rem;
  }
  & > div > div > button.active {
    background-color: ${({theme}) => theme.color.secondary};
  }
  & > div > div > button.completed {
    background-color: ${({theme}) => theme.color.secondaryDark};
  }
  & > div > div > div > span {
    font-size: 1.2rem;
  }
`