import React from 'react';
import './Header.scss';

const CSS_NAME = 'header'

const Header = () => {
    return (
        <div className={CSS_NAME}>
            Gymondo
            <div className={`${CSS_NAME}_logo`}></div>
        </div>
    )
}

export default Header;