/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import Header from '../Header';
import SearchField from '../SearchField';
import CoursesList from '../CoursesList';
import Paginator from '../Paginator';
import { getCourses } from '../../services/courseService'

import './MainPage.scss';

const CSS_NAME = 'main-page'

const MainPage = () => {
    const [categories, setCategories] = useState([]);
    const [date, setDate] = useState(moment());
    const [page, setPage] = useState(1);
    const [areCoursesFound, setAreCoursesFound] = useState(true);

    let { data } = useQuery(['courses', page, date, categories], (_, page, date, categories) => getCourses(moment(date), categories, page));

    if (!data) {
        data = [];
    }

    // Instead of react-query, the useEffect() hook could be used

    // useEffect(() => {
    //     getCourses(moment(date), categories, page)
    //         .then(responseData => setData(responseData))
    // }, [page, date, categories])

    if (data.length <= 0) {
        if (areCoursesFound) {
            setAreCoursesFound(false)
        }
    }

    return (
        <div className={CSS_NAME}>
            <Header />
            <SearchField
                categories={categories}
                page={page}
                setCategories={setCategories}
                setDate={setDate}
            />
            <CoursesList courses={data} />
            <Paginator currentPage={page} setPage={setPage} areCoursesFound={areCoursesFound} />
        </div>
    );
}

export default MainPage;
