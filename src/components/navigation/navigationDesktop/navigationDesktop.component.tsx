import React from 'react';
import { navLinksDesktopArr } from './navigationDesktop.config';
import { 
  DropdownContainer,
  DropdownLink,
  DropdownList,
  NavDeskLink,
  NavList,
  Ul 
} from './navigationDesktop.style';
import { 
  IDropDownLink,
  INavigationDesktop,
  INavigationDesktopProps 
} from './navigationDesktop.type';
import {nanoid} from 'nanoid';
import { useHistory } from 'react-router';


const NavigationDesktop: React.FC<INavigationDesktopProps> = ({
  setPage,
  activePage,
  isAuthenticated,
  setLogout
  }) => {

  const history = useHistory();

  const handleClickLink = (value: string) => {
    if(value === ""){
      setLogout();
      setPage("homePage",true);
    } else if (!isAuthenticated && value === "addPropertiesPage"){
      setPage("signInPage",true);
      history.push('/signIn');
    } else {
      setPage(value,true);
    }
  }

  return (
    <Ul>
      {
        navLinksDesktopArr.map((el: INavigationDesktop) => 
          <>
            <NavList
              key={nanoid()}
              active={el.value === activePage}
              onClick={() => handleClickLink(el.value)}
              isNotVisible={
                (isAuthenticated && el.linkName === "SIGN IN") ||
                (!isAuthenticated && el.linkName === "SIGN OUT")
                }>
              <NavDeskLink to={el.path!}>
                {el.linkName}
              </NavDeskLink>
              { 
              el.dropDownLinks &&
              <DropdownContainer>
                {
                  el.dropDownLinks.map((el: IDropDownLink) => 
                    <DropdownList
                      key={nanoid()}
                      onClick={() => setPage(el.value,true)}>
                      <DropdownLink to={el.path}>
                        {el.linkName}
                      </DropdownLink>
                    </DropdownList>
                  )
                }
              </DropdownContainer>
            }
            </NavList>
            
          </>
        )
      }
    </Ul>
  );
}

export default NavigationDesktop;
