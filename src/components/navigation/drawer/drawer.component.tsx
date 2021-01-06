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
  setShowDrawer,
  isAuthenticated,
  setLogout
  }) => {

  const [selectedLink, setSelectedLink] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
      showDrawer ?  
      document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';
  }, [showDrawer]);

  const handleLogout = () => {
    setShowDrawer(false);
    setLogout();
  }

  const handleClickLink = (obj: any, index: number) => {
    if(obj.hasOwnProperty("dropDownLinks")){
      setSelectedLink(index);
      setShowDropdown(!showDropdown);
      return;
    }
    setShowDrawer(false);
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
                onClick={() => handleClickLink(el,index)}>
                <DrawerLinkIcon src={el.icon} alt={el.text}/>
                <DrawerLinkText to={el.path}>
                  {el.linkName}
                </DrawerLinkText>
                { 
                  showDropdown && index === selectedLink ?
                    <DrawerDropDown 
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
