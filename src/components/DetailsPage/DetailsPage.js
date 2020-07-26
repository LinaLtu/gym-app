import React, { useState, Fragment } from 'react';
import './DetailsPage.scss';

const CSS_NAME = 'details-page';


const DetailsPage = () => {

    return (
        <div className={CSS_NAME}>
            <div>Course Name: "Course"</div>
            <div>Description: "Description"</div>
            <div>Start Date: "Date"</div>
            <div>Category: "Category"</div>
        </div>
    )

}

export default DetailsPage;