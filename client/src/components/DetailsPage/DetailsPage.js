import React, { useState, Fragment, useContext } from 'react';
import Header from '../Header';
import './DetailsPage.scss';

const CSS_NAME = 'details-page';


const DetailsPage = () => {
    // const course = useContext(CourseContext);
    // console.log("course", course);

    return (
        <div className={CSS_NAME}>
            <Header />
            <div className={`${CSS_NAME}_course-card`}>
                <div>Course Name: "Course"</div>
                <div>Description: "Description"</div>
                <div>Start Date: "Date"</div>
                <div>Category: "Category"</div>
            </div>
        </div>
    )

}

export default DetailsPage;