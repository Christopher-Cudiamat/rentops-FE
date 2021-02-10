import React, { useEffect, useState } from 'react';
import { 
    Div,
    IconMenu, 
    ImageLink,
    ImageLogo,
    Navbar,
    NavbarLeft,
    NavbarRight,
} from './navigation.style';
import logo from '../../assets/logos/logo.png';
import NavigationMobile from './navigationMobile/navigationMobile.container';
import NavigationDesktop from './navigationDesktop/navigationDesktop.container';
import { INavigationProps } from './navigation.type';

const Navigation: React.FC<INavigationProps>= ({
    setPage
}) => {

    const [showDrawer,setShowDrawer] = useState(false);
    let [topOffset,setTopOffset] = useState(0);
    let maxOffsetThreshold: number = 10;
 

    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
    }, []);

    const handleOnScroll = () => {
        setTopOffset(window.pageYOffset);
    }

    return(
        <Div>
            <Navbar toFixPosition={topOffset > maxOffsetThreshold}>
                <NavbarLeft>
                    <IconMenu onClick={() => setShowDrawer(!showDrawer)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </IconMenu>
                    <ImageLink 
                        onClick={() => setPage("homePage",true)}
                        to="./">
                        <ImageLogo 
                            src={logo} 
                            alt="logo"
                        />
                    </ImageLink>
                </NavbarLeft>
                <NavbarRight>
                    <NavigationDesktop/>
                </NavbarRight>
                <NavigationMobile 
                    showDrawer={showDrawer} 
                    setShowDrawer={setShowDrawer}
                />
            </Navbar>
        </Div>
    )
};

export default Navigation;