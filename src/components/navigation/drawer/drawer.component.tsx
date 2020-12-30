import React, { useEffect } from 'react';
import { drawerLinks } from './drawer.config';
import { 
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
import { AuthButtonLink } from '../../ui/buttonLink.style';


const Drawer: React.FC<DrawerPropTypes> = ({
  showDrawer,
  setShowDrawer,
  isAuthenticated,
  setLogout
  }) => {

  useEffect(() => {
      showDrawer ?  
      document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';
  }, [showDrawer]);

  const handleLogout = () => {
    setShowDrawer(false);
    setLogout();
  }

  return (
    <>
      <DrawerContainer showDrawer={showDrawer}>
        <DrawerListContainer>
          <DrawerClose src={closeIcon} alt="Close" onClick={() => setShowDrawer(false)}/>
          {
            drawerLinks.map((el:any, index: number) => (
              <DrawerList 
                showLink={el.linkName === "MY LISTINGS" && isAuthenticated}
                key={index} 
                onClick={() => setShowDrawer(false)}>
                <DrawerLinkIcon src={el.icon} alt={el.text}/>
                <DrawerLinkText to={el.path}>
                  {el.linkName}
                </DrawerLinkText>
              </DrawerList>
            ))
          }
        </DrawerListContainer>
        <DrawerButtonsContainer>
          {
          !isAuthenticated ?
          <>
            <AuthButtonLink 
              primary
              to="/signIn"
              onClick={() => setShowDrawer(false)}>
              Sign in
            </AuthButtonLink>
            <AuthButtonLink 
              secondary
              to="/signUp"
              onClick={() => setShowDrawer(false)}>
              Sign up
            </AuthButtonLink>
          </>
          :
          <AuthButtonLink 
            tertiary
            to="./"
            onClick={() => handleLogout()}>
            Logout
          </AuthButtonLink>
          }
        </DrawerButtonsContainer>
      </DrawerContainer>
      <DrawerUnderlay showDrawer={showDrawer} onClick={() => setShowDrawer(false)}/>
    </>
  );
}

export default Drawer;
