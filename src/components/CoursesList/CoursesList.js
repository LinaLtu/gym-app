import React from 'react';
import './CoursesList.scss';
import CourseCard from '../CourseCard';

const CSS_NAME = 'course-list'

const CoursesList = () => {
    return (
        <div className={CSS_NAME}>
            <CourseCard />
        </div>
    )
}

export default CoursesList;