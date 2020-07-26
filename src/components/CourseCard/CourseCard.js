import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CourseCard.scss';

const CSS_NAME = 'course-card';

const mockCourseList = [
    {
        name: 'zumba',
        description: 'latin music and good mood guaranteed',
        startDate: 'monday',
        category: 'c2'
    },
    {
        name: 'body attack',
        description: 'intensive and sweaty',
        startDate: 'tuesday',
        category: 'c3'
    },
    {
        name: 'body balance',
        description: 'low impact',
        startDate: 'friday',
        category: 'c1'
    },
]

const CourseCard = () => {

    const [courseList, setCourseList] = useState(mockCourseList);
    const history = useHistory();

    const handleOnClick = () => {
        history.push("/course")
    }

    const courseCardTemplate = courseList.map(course => {
        return (
            <div className={CSS_NAME} onClick={handleOnClick}>
                <div>Course Name: {course.name}</div>
                <div>Description: {course.description}</div>
                <div>Start Date: {course.startDate}</div>
                <div>Category: {course.category}</div>
            </div>
        )
    });

    return (
        courseCardTemplate
    )
}

export default CourseCard;