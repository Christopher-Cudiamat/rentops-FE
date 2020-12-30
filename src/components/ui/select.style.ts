import styled from "styled-components";

export const Select= styled.select`
  height: 5rem;
  border-radius: .5rem;
  border: 2px solid ${({theme})=> theme.color.grayLight};
  background: ${({theme})=> theme.color.white};
  outline: none;
  font-size:1.8rem;
  padding-left: 1rem;
  color: ${({theme}) => theme.color.gray};
  width: 100%;
  @media ${({theme}) => theme.media.laptop} { 
    width:35%;
  }
`
