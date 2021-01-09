import styled from "styled-components/macro";
import InputRange from 'react-input-range';


export const StyledInputRange = styled(InputRange)`
  display: none !important;
  & .input-range__label-container {
    display: none;
  } 
  
`
export const Container = styled.div`
  margin: 3rem 0rem;
`
export const Size = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  & > span {
    font-size: 1.6rem;
    font-weight: 500;
  }
`


