import React from 'react';
import logo from './../../asserts/logo.png';
import './Header.css';

const Header = () => {
    return(
        <div className = "header">
            <img id='header--logo' src={logo} alt='logo' />
        </div>
    )
}

export default Header;