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
    border-radius: 0rem;
    clip-path: polygon(50% 0%, 100% 37%, 89% 37%, 89% 100%, 12% 100%, 12% 39%, 0 38%);
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
    @media ${({theme}) => theme.media.tablet} { 
      font-size: 1.6rem;
    }
    @media ${({theme}) => theme.media.laptop} { 
      font-size: 1.8rem;
    }
  }
`