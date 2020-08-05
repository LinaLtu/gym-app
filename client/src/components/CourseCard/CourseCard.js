import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './CourseCard.scss';

const CSS_NAME = 'course-card';

const CourseCard = ({ course }) => {
    const history = useHistory();

    const handleOnClick = () => {
        history.push(`/course/${course._id}`)
    }

    return (
        <div className={CSS_NAME} onClick={handleOnClick}>
            <div className={`${CSS_NAME}_course-name`}>{course.name}</div>
            <div className={`${CSS_NAME}_details`}>{course.startDate} | {course.category}</div>
            <div className={`${CSS_NAME}_description`}> {course.description}</div>
        </div >
    )
}

CourseCard.propTypes = {
    course: PropTypes.object.isRequired
};


export default CourseCard;