import React from 'react';
import PropTypes from 'prop-types';
import './CoursesList.scss';
import CourseCard from '../CourseCard';

const CSS_NAME = 'course-list'

const CoursesList = ({ courses }) => {

    return (<div className={CSS_NAME}>
        {courses.map((course, index) => { return <CourseCard course={course} key={index} /> })}
    </div>)
}

CoursesList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CoursesList;