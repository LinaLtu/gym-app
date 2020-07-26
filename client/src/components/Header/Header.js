import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

const CSS_NAME = 'header'

const Header = () => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push("/");
    }

    return (
        <div className={CSS_NAME} onClick={handleOnClick}>
            Gymondo
            <div className={`${CSS_NAME}_logo`}></div>
        </div>
    )
}

export default Header;