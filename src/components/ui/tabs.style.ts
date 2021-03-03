import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from "styled-components/macro";


interface ITabsStyle {
  active?: boolean
}

export const TabsStyled = styled(Tabs)`
  width: 100%;
  padding: 2rem 0rem;
`
export const TabStyled = styled(Tab)<ITabsStyle>`
  color:  ${({active, theme}) => active 
  ? theme.color.white 
  : theme.color.blackLight};
  background: ${({active, theme}) => active 
  ? theme.color.primary 
  : theme.color.grayLightest};
`
export const TabListStyled = styled(TabList)<ITabsStyle>`
  display: flex;
  margin-bottom: 2rem;
  font-weight: bold;
  flex-wrap: no-wrap;
  overflow: auto;
  padding-left: 2rem;

  @media ${({theme}) => theme.media.laptop} { 
    justify-content: center;
  }
  

  & > li {
    transition: all .3s;
    padding: 1rem 1rem;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    margin: 0rem .5rem;
    margin-bottom: 1rem;
  }
`

export const TabPanelStyled = styled(TabPanel)`
  padding: 0rem 2rem;
  @media ${({theme}) => theme.media.laptop} { 
    width: 70%;
    margin: auto;
  }
`