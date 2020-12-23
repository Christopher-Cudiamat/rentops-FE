import styled from "styled-components";

export const Select= styled.select`
  height: 5rem;
  border-radius: .5rem;
  border: none;
  outline: none;
  font-size:1.8rem;
  padding-left: 1.5rem;
  color: ${({theme}) => theme.color.gray};
`
