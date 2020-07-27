import React, { useState, Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import './DetailsPage.scss';

const CSS_NAME = 'details-page';


const DetailsPage = () => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push("/");
    }

    return (
        <div className={CSS_NAME}>
            <Header />
            <div className={`${CSS_NAME}_course-card`}>
                <div className={`${CSS_NAME}_course-name`}>"Course"</div>
                <div className={`${CSS_NAME}_details`}>StartDate | Category</div>
                <div className={`${CSS_NAME}_description`}>Description: Very very long</div>
                <button className={`${CSS_NAME}_back-button`} onClick={handleOnClick} >Go Back</button>
            </div>
        </div >
    )

}

export default DetailsPage;