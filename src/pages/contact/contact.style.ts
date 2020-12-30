import styled  from "styled-components/macro";
import { Form } from "../../components/ui/form.style";


export const FormControl = styled(Form)`
  padding: 5rem 2rem 7rem;
  margin: auto;
  & p {
    margin-bottom: 3rem;
  }
  & button {
    margin: 1.5rem auto;
    & > a {
      color: white;
      text-decoration: none;
    }
  }
`

