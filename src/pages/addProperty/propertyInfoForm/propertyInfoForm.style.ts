import styled from "styled-components/macro";


export const FormContainer = styled.form`
  padding: 4rem 2rem 10rem 2rem;
`

export const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;

  & > div {
    width: 20%;
  }
  & > div:first-child {
    width: 50%;
  }
`
