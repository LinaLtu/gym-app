import React from 'react';
import { useHistory } from 'react-router-dom';
import './CourseCard.scss';

const CSS_NAME = 'course-card';

const CourseCard = ({ course }) => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push(`/course/${course.id}`)
    }

    return (

        <div className={CSS_NAME} onClick={handleOnClick}>
            <div>Course Name: {course.name}</div>
            <div>Description: {course.description}</div>
            <div>Start Date: {course.startDate}</div>
            <div>Category: {course.category}</div>
        </div>
    )
}

export default CourseCard;