import React from 'react';
import Logo from './Logo/Logo'
import './Header.scss';

const CSS_NAME = 'header'

const Header = () => {

    return (
        <div className={CSS_NAME}>
            <Logo />
        </div>
    )
}

export default Header;