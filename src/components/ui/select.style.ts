import styled from "styled-components";

interface ISelect {

}

export const Select= styled.select<ISelect>`
  height: 5rem;
  border-radius: .5rem;
  border: none;
  outline: none;
  font-size:1.8rem;
  padding-left: 1.5rem;
  color: ${props => props.theme.color.gray};
  /* background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: right 100%; */
  
`
