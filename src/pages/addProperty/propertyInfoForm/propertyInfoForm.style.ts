import styled from "styled-components/macro";
import { Form } from "../../../components/ui/form.style";


export const FormContainer = styled(Form)`
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
