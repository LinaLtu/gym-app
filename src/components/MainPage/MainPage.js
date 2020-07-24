import React from 'react';
import Header from '../Header';
import SearchField from '../SearchField';

import './MainPage.scss';

const CSS_NAME = 'main-page'

const MainPage = () => {
    return (
        <div className={CSS_NAME}>
            <Header />
            <SearchField />
        </div>
    );
}

export default MainPage;