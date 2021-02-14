import styled from "styled-components/macro";

export const Select= styled.select`
  height: 5rem;
  border-radius: .5rem;
  border: 2px solid ${({theme})=> theme.color.grayLight};
  background: ${({theme})=> theme.color.white};
  outline: none;
  font-size:1.8rem;
  padding-left: 1rem;
  color: ${({theme}) => theme.color.blackLight};
  width: 100%;
`
