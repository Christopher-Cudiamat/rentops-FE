import styled from "styled-components";

interface ISelect {

}



export const Select= styled.select<ISelect>`
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
