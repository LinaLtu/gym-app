import React from 'react';
import './CoursesList.scss';
import CourseCard from '../CourseCard';

const CSS_NAME = 'course-list'

const CoursesList = ({ courses }) => {

    return (<div className={CSS_NAME}>
        {courses.map((course, index) => { return <CourseCard course={course} key={index} /> })}
    </div>)
}

export default CoursesList;