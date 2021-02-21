import styled from "styled-components/macro";
import InputRange from 'react-input-range';


export const StyledInputRange = styled(InputRange)`
  display: none !important;
  & .input-range__label-container {
    display: none;
  } 
  
`
export const Container = styled.div`
  margin: 1rem 0rem 4rem 0rem;
`
export const Price = styled.p`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  
`

