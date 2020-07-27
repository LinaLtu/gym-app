import React, { useState } from 'react';
import './CoursesList.scss';
import CourseCard from '../CourseCard';

const CSS_NAME = 'course-list'

const CoursesList = ({ courses }) => {

    return (<div className={CSS_NAME}>
        {courses.map(course => { return <CourseCard course={course} /> })}
    </div>)
}

export default CoursesList;