import styled  from "styled-components";

interface IOption {

}


export const Option = styled.option<IOption>`
  color: ${props => props.theme.color.gray};
  font-size:1.6rem;
  
`