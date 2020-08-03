import React from "react";
import { useHistory } from 'react-router-dom';
import './Logo.scss';

const CSS_NAME = 'logo';

const Logo = () => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push("/");
    }

    return (
        <div className={CSS_NAME} onClick={handleOnClick}>
        </div>
    )
}

export default Logo;