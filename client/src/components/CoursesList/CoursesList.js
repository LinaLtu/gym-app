import React, { useState } from 'react';
import './CoursesList.scss';
import CourseCard from '../CourseCard';

const CSS_NAME = 'course-list'

const mockCourseList = [
    {
        id: 'id1',
        name: 'zumba',
        description: 'latin music and good mood guaranteed',
        startDate: 'monday',
        category: 'c2'
    },
    {
        id: 'id2',
        name: 'body attack',
        description: 'intensive and sweaty',
        startDate: 'tuesday',
        category: 'c3'
    },
    {
        id: 'id3',
        name: 'body balance',
        description: 'low impact',
        startDate: 'friday',
        category: 'c1'
    },
]


const CoursesList = () => {

    const [courseList, setCourseList] = useState(mockCourseList);

    return courseList.map(course => {
        return (
            <div className={CSS_NAME}>
                <CourseCard course={course} />
            </div>
        )

    });
}

export default CoursesList;