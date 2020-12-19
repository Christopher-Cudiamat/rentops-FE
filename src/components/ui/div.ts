import styled  from "styled-components";

interface IDiv {
  display?: string,
  justify?: string,
  align?: string,
}


export const Div = styled.div<IDiv>`
  display: ${props => props.display ? props.display : "block"};
  justify-content: ${props => props.justify ? props.justify : "flex-start"};
  align-items: ${props => props.align ? props.align : "center"};
`