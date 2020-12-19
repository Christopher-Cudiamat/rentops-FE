import React, { useEffect } from 'react';
import { drawerLinks } from './drawer.config';
import { 
  DrawerButton,
  DrawerButtonsContainer,
  DrawerClose,
  DrawerContainer, 
  DrawerLinkIcon, 
  DrawerLinkText, 
  DrawerList, 
  DrawerListContainer, 
  DrawerUnderlay 
} from './drawer.style';
import { DrawerPropTypes } from './drawer.type';
import closeIcon from '../../../assets/icon/close.svg';

const Drawer: React.FC<DrawerPropTypes> = ({showDrawer,setShowDrawer}) => {

  useEffect(() => {
    if(showDrawer){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showDrawer]);

  return (
    <>
      <DrawerContainer showDrawer={showDrawer}>
        <DrawerListContainer>
          <DrawerClose src={closeIcon} alt="Close" onClick={() => setShowDrawer(false)}/>
          {
            drawerLinks.map((el:any, index: number) => (
              <DrawerList key={index}>
                <DrawerLinkIcon src={el.icon} alt={el.text}/>
                <DrawerLinkText to={el.path}>
                  {el.linkName}
                </DrawerLinkText>
              </DrawerList>
            ))
          }
        </DrawerListContainer>
        <DrawerButtonsContainer>
          <DrawerButton 
            primary 
            to="/signIn"  
            onClick={() => setShowDrawer(false)}>
            LOGIN
          </DrawerButton>
          <DrawerButton 
            secondary 
            to="/signUp"  
            onClick={() => setShowDrawer(false)}>
            SING UP
          </DrawerButton>
        </DrawerButtonsContainer>
      </DrawerContainer>
      <DrawerUnderlay showDrawer={showDrawer} onClick={() => setShowDrawer(false)}/>
    </>
  );
}

export default Drawer;
