import styled  from "styled-components";

interface IDiv {
  display?: string,
  justify?: string,
  align?: string,
  direction?: string,
}

export const Div = styled.div<IDiv>`
  display: ${({display}) => display ? display : "block"};
  justify-content: ${({justify})=> justify ? justify : "flex-start"};
  align-items: ${({align}) => align ? align : "center"};
  flex-direction: ${({direction}) => direction ? direction : "row"};
`