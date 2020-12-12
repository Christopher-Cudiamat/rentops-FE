import styled from "styled-components";
import { keyframes } from 'styled-components'

interface IDrawer {
  showDrawer?: boolean,
  linkColor?: string,
}

const drawerSlideIn = keyframes`
  0% { left: -60%; }
  100% { left: 0% }
`
const drawerSlideOut = keyframes`
 0% { left: 0% }
 100% { left: -60%;}
`

export const DrawerContainer = styled.ul<IDrawer>`
  height: 50rem;
  width: 60%;
  background: ${props => props.theme.color.white};
  position: absolute;
  left: ${props => props.showDrawer ? "0%" : "-60%"};
  top: 0%;
  z-index: 999;
  animation-name: ${props => props.showDrawer ? drawerSlideIn : drawerSlideOut};
  animation-duration: .3s;
`

export const DrawerUnderlay = styled.div<IDrawer>`
  height: 100vh;
  width: 100vw;
  display: ${props => props.showDrawer ? "block" : "none"};
  background: ${props => props.theme.color.black};
  position: absolute;
  left: 0%;
  top: 0%;
  z-index: 888;
  opacity: 0.5;
`
export const DrawerList = styled.li<IDrawer>`
  color: ${props => props.linkColor};
`
