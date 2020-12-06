import styled, {css} from "styled-components";

interface ISelectTypes {
 
  fixed?:boolean,
  medium?:boolean,
}



export const Select= styled.select<ISelectTypes>`
  height: 5rem;
  border-radius: .5rem;
  border: none;
  font-size:1.8rem;
  padding-left: .5rem;
  padding-right: .5rem;
  &:selected {
    color: ${props => props.theme.color.gray};
  }
  
`

export const Option = styled.option<ISelectTypes>`
  color: ${props => props.theme.color.gray};
  font-size:1.6rem;
  
`