import React, { useState } from 'react';
import { 
    Div,
    IconMenu, 
    IconSearch,
    IconSearchContainer,
    ImageLink,
    ImageLogo,
    Navbar,
    NavbarLeft,
    NavbarRight,
} from './navigation.style';
import logo from '../../assets/logos/logo.png';
import searchIcon from '../../assets/icon/search.svg';
import Drawer from './drawer/drawer.container';

const Navigation = () => {

    const [showDrawer,setShowDrawer] = useState(false);

    return(
        <Div>
            <Navbar>
                <NavbarLeft>
                    <IconMenu onClick={() => setShowDrawer(!showDrawer)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </IconMenu>
                    <ImageLink to="./">
                        <ImageLogo src={logo} alt="logo"/>
                    </ImageLink>
                </NavbarLeft>
                <NavbarRight>
                    <IconSearchContainer>
                        <IconSearch src={searchIcon} alt="Search icon"/>
                    </IconSearchContainer>
                </NavbarRight>
            </Navbar>
            <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
        </Div>
    )
};

export default Navigation;