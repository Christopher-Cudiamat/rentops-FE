import styled from "styled-components/macro";
import { keyframes } from 'styled-components'
import { Button } from "../../ui/button.style";

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
export const DrawerContainer = styled.div<IDrawer>`
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
  animation-name: ${({showDrawer}) => showDrawer ? drawerSlideIn : drawerSlideOut};
  animation-duration: .3s;
  padding: 2rem 2rem 3rem 1rem;
  @media ${({theme}) => theme.media.tablet} { 
    width: 50%;
  }
  @media ${({theme}) => theme.media.laptop} { 
    width: 20%;
    padding: 2rem 2rem 3rem -1rem;
  }
`

export const DrawerListContainer = styled.ul<IDrawer>``

export const DrawerButtonsContainer = styled.div<IDrawer>``

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
  color: ${({theme}) => theme.color.blackLight}; 
  text-transform: capitalize;
  font-weight: 500;
  margin: 2.5rem 0rem;
  font-size: 1.6rem;
  transition: all .3s;
  display: flex;
  align-items: end;
  &:hover {
    color: ${({theme}) => theme.color.primary}; 
  }
`
export const DrawerLinkIcon = styled.img`
  opacity: 0.3;
  height: 2rem;
  margin-right: 1rem;
`
export const DrawerLinkText = styled.p`
  font-size: 1.6rem;
  margin: 0rem;
`


export const DrawerButton = styled(Button)`
  margin: 1rem 0rem;
  height: 4rem;
  font-size: 1.6rem;
  @media ${props => props.theme.media.laptop} { 
    margin: 1rem 1rem 1rem 0rem;
    width: 40%;
    &:hover {
      color: ${({theme}) => theme.color.primary}; 
      background: ${({theme}) => theme.color.white};
      border: 2px solid ${({theme}) => theme.color.primary};
    }
  }
  
`;

export const DrawerClose = styled.img<IDrawer>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  opacity: 0.8;
`
