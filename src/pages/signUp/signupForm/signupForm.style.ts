import styled  from "styled-components/macro";
import { Form } from "../../../components/ui/form.style";


export const FormControl = styled(Form)`
  padding: 6rem 2rem;
  margin: auto;
  
  & > p:last-child{
    margin-top: 2rem;
    text-align: center;

    & > span {
      margin-left: .6rem;
      color: ${({theme}) => theme.color.primary};
      cursor:pointer;
    }
  }
`