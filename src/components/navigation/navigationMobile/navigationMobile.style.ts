import styled from "styled-components/macro";
import { keyframes } from 'styled-components'
import { Link } from "react-router-dom";
interface IDrawer {
  showDrawer?: boolean,
  linkColor?: string,
  showLink?: boolean,
  active?: boolean
}

const drawerSlideIn = keyframes`
  0% { left: -60%; }
  100% { left: 0% }
`
const drawerSlideOut = keyframes`
 0% { left: 0% }
 100% { left: -60%;}
`
export const DrawerContainer = styled.div<IDrawer>`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 60%;
  height: 93vh;
  background: ${({theme})=> theme.color.white};
  position: absolute;
  left: ${({showDrawer}) => showDrawer ? "0%" : "-60%"};
  top: 0%;
  z-index: 999999;
  animation-name: ${
    ({showDrawer}) => showDrawer ? drawerSlideIn : drawerSlideOut
  };
  animation-duration: .3s;
  padding: 2rem 0rem;
  @media ${({theme}) => theme.media.tablet} { 
    width: 30%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 20%;
    padding: 2rem 2rem 3rem -1rem;
    overflow-y: hidden;
  }
`

export const DrawerListContainer = styled.ul<IDrawer>``

export const DrawerSubListContainer = styled.ul<IDrawer>`
  width: 100%;
  margin-top: 1rem;
  background: ${({theme}) => theme.color.grayLightest};
  padding: 0rem 0rem 0rem 6rem;
`

export const DrawerButtonsContainer = styled.div<IDrawer>`
  padding: 0rem 1rem; 
`

export const DrawerUnderlay = styled.div<IDrawer>`
  height: 100vh;
  width: 100vw;
  display: ${({showDrawer}) => showDrawer ? "block" : "none"};
  background: ${({theme}) => theme.color.black};
  position: absolute;
  left: 0%;
  top: 0%;
  z-index: 888;
  opacity: 0.5;
`
export const DrawerList = styled.li<IDrawer>`
  & > a {
    transition: all .3s;
    color: ${
      ({active,theme}) => active ? theme.color.primary : theme.color.blackLight
    }; 
  }
  text-transform: capitalize;
  font-weight: 500;
  margin: 2.5rem 0rem;
  font-size: 1.6rem;
  display: ${({showLink}) => showLink ? "none" : "flex"};
  align-items: end;
  flex-wrap: wrap;
  &:hover > a {
    color: ${({theme}) => theme.color.secondary}; 
    text-decoration: none;
  }
`
export const DrawerSubList = styled.ul<IDrawer>`
  margin: 1.5rem 0rem;
  &:hover a{
    color: ${({theme}) => theme.color.primary}; 
    text-decoration: none;
  }
`

export const DrawerLinkIcon = styled.img`
  opacity: 0.3;
  height: 2rem;
  margin-right: 1rem;
  padding: 0rem 0rem 0rem 1rem;
`
export const DrawerLinkText = styled(Link)`
  font-size: 1.6rem;
  margin: 0rem;
  width: 80%;
  font-weight: 600;
`
export const DrawerSubLinkText = styled(Link)`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0rem;
  color: ${({theme}) => theme.color.blackLight}; 
  &:hover {
    color: ${({theme}) => theme.color.secondary}; 
    text-decoration: none;
  }
`

export const DrawerClose = styled.img<IDrawer>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  opacity: 0.8;
`
