import React, { useEffect, useState } from 'react';
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
import DrawerDropDown from './drawerDropDown/drawerDropDown.component';


const Drawer: React.FC<DrawerPropTypes> = ({
  showDrawer,
  isAuthenticated,
  activePage,
  setShowDrawer,
  setLogout,
  setPage,
  setPropertyInfo
  }) => {

  const [selectedLink, setSelectedLink] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
      if(showDrawer ){
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      } 
      
      return () => {
        setShowDropdown(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDrawer]);

  const handleLogout = () => {
    setShowDrawer(false);
    setLogout();
  }

  const handleClickLink = (obj: any, index: number) => {
    setPage(obj.value,true);
    if(obj.hasOwnProperty("dropDownLinks")){
      setSelectedLink(index);
      setShowDropdown(!showDropdown);
      return;
    }
    setShowDrawer(false);
  }

  const handleAuth = (name: string, value: boolean) => {
    setPage(name,value);
    setShowDrawer(false)
  }

  return (
    <>
      <DrawerContainer showDrawer={showDrawer}>
        <DrawerListContainer>
          <DrawerClose src={closeIcon} alt="Close" onClick={() => setShowDrawer(false)}/>
          {
            drawerLinks.map((el:any, index: number) => (
              <DrawerList 
                key={index} 
                active={el.value === activePage}
                showLink={el.value === "myAccountPage" && !isAuthenticated}
                onClick={() => handleClickLink(el,index)}>
                <DrawerLinkIcon src={el.icon} alt={el.text}/>
                <DrawerLinkText to={el.path}>
                  {el.linkName}
                </DrawerLinkText>
                { 
                  showDropdown && index === selectedLink ?
                  <DrawerDropDown
                    setPropertyInfo={setPropertyInfo} 
                    arr={el.dropDownLinks}
                    setShowDrawer={setShowDrawer}/> : null
                }
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
              onClick={() => handleAuth("signInPage", true)}>
              Sign in
            </AuthButtonLink>
            <AuthButtonLink 
              secondary
              to="/signUp"
              onClick={() => handleAuth("signOutPage", true)}>
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
