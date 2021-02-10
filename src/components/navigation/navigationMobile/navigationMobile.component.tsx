import React, { useEffect, useState } from 'react';
import { navMobileLinks } from './navigationMobile.config';
import { 
  DrawerButtonsContainer,
  DrawerClose,
  DrawerContainer, 
  DrawerLinkIcon, 
  DrawerLinkText, 
  DrawerList, 
  DrawerListContainer, 
  DrawerUnderlay 
} from './navigationMobile.style';
import { 
  DrawerPropTypes,
  INavMobile 
} from './navigationMobile.type';
import closeIcon from '../../../assets/icon/close.svg';
import { AuthButtonLink } from '../../ui/buttonLink.style';
import DrawerDropDown from './drawerDropDown/drawerDropDown.component';
import { scrollStop } from '../../../utils/scrollManager';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid'


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
  const history = useHistory();

  useEffect(() => {
      scrollStop(showDrawer); 
      return () => {
        setShowDropdown(false);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDrawer]);

  const handleLogout = () => {
    setShowDrawer(false);
    setLogout();
  }

  const handleClickLink = (obj: INavMobile, index: number) => {
    setPage(obj.value,true);
    if(obj.value === "addPropertiesPage"){
      handlePrivateLinks(obj.value);
    }
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

  const handlePrivateLinks = (value: string) => {
    if(value === "addPropertiesPage" && isAuthenticated){
      history.push("./add-property");
      setPage(value,true);
    } else {
      history.push("./signIn");
      setPage("signInPage",true);
    }
  }

  return (
    <>
      <DrawerContainer showDrawer={showDrawer}>
        <DrawerListContainer>
          <DrawerClose 
            src={closeIcon} 
            alt="Close" 
            onClick={() => setShowDrawer(false)}
          />
          {
            navMobileLinks.map((el: INavMobile, index: number) => (
              <DrawerList 
                key={nanoid()} 
                active={el.value === activePage}
                showLink={el.value === "myAccountPage" && !isAuthenticated}
                onClick={() => handleClickLink(el,index)}>
                <DrawerLinkIcon src={el.icon} alt={el.altText}/>
                <DrawerLinkText to={el.path!}>
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
              SIGN IN
            </AuthButtonLink>
            <AuthButtonLink 
              secondary
              to="/signUp"
              onClick={() => handleAuth("signOutPage", true)}>
              SIGN UP
            </AuthButtonLink>
          </>
          :
          <AuthButtonLink 
            tertiary
            to="./"
            onClick={() => handleLogout()}>
            LOGOUT
          </AuthButtonLink>
          }
        </DrawerButtonsContainer>
      </DrawerContainer>
      <DrawerUnderlay showDrawer={showDrawer} onClick={() => setShowDrawer(false)}/>
    </>
  );
}

export default Drawer;
