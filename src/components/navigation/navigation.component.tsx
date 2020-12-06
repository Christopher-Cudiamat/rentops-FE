import React from 'react';
import Navbar from '../../styledComponents/navbar.style';
import { AiOutlineMenu } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { Div } from './navigation.style';
import logo from '../../assets/logos/logo.png';


const Navigation = () => {
    return(
        <Div>
            <Navbar>
                <AiOutlineMenu color={"white"} fontSize={"3rem"}/>
                <img src={logo} alt="logo"/> 
                <GoSearch color={"white"} fontSize={"3rem"}/>
            </Navbar>
        </Div>
    )
};

export default Navigation;