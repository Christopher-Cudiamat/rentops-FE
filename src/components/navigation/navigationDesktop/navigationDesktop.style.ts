import { Link } from "react-router-dom";
import styled from "styled-components/macro";


interface INavigationDesktop {
  active?: boolean,
  isNotVisible?: boolean,
}


export const Ul = styled.ul<INavigationDesktop>`
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
  margin-top: 1rem;
  & a {
    font-weight: 500;
    text-decoration: none;
    transition: all .3s;
  }

  & > li:nth-child(3),
  & > li:nth-child(4){
    border-left: solid 1px ${({theme}) => theme.color.gray};
  }

`

export const NavList = styled.li<INavigationDesktop>`
  padding: 0rem 2rem;
  position: relative;
  display: ${({isNotVisible}) => isNotVisible ? "none":"inline-block"};
  &:hover > ul{
    display: block;
  }
  &:hover a {
    color: ${({theme}) => theme.color.secondary};
  }
  & > a {
    color: ${
      ({active,theme}) => active ? theme.color.primary : theme.color.blackLight
    }; 
  }
`

export const NavDeskLink = styled(Link)<INavigationDesktop>`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: all .3s;
`

export const DropdownContainer = styled.ul<INavigationDesktop>`
  display: none;
  position: absolute;
  top: 2.5rem;
  left: 2rem;
  box-shadow: -7px 3px 16px -7px rgba(0,0,0,0.37);

`
export const DropdownList = styled.li<INavigationDesktop>`
  width: 100%;
  display: block;
  padding: 1.5rem 3rem 1.5rem 1.5rem;
  background: ${({theme}) => theme.color.primary};
  transition: all .4s;
  &:first-child{
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
  &:last-child{
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
  &:hover {
    background: ${({theme}) => theme.color.secondary};
  }
`
export const DropdownLink = styled(Link)<INavigationDesktop>`
  color: ${({theme}) => theme.color.white} !important;
  font-size: 1.6rem;

`