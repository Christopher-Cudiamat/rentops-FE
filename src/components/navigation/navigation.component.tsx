import React, { useState } from 'react';
import Navbar from './navbar.style';
import { 
    Div,
    IconMenu, 
    IconSearch,
    ImageLogo,
} from './navigation.style';
import logo from '../../assets/logos/logo.png';
import searchIcon from '../../assets/icon/search.svg';
import menuIcon from '../../assets/icon/menu.svg';
import Drawer from './drawer/drawer.component';

const Navigation = () => {
    const [showDrawer,setShowDrawer] = useState(false);
    return(
        <Div>
            <Navbar>
                <IconMenu 
                    src={menuIcon} 
                    alt="Burger menu" 
                    onClick={() => setShowDrawer(!showDrawer)}/>
                <ImageLogo src={logo} alt="logo"/> 
                <IconSearch src={searchIcon} alt="Search icon"/>
            </Navbar>
            <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer}/>
        </Div>
    )
};

export default Navigation;