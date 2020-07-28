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

    const [page, setPage] = useState(1);
    const listOfDefaultCategories = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7']

    const { data, status } = useQuery(['courses', page], (_, page) => getCourses(moment(), listOfDefaultCategories, page));

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error!</div>;
    }

    console.log("data", data);
    return (
        <div className={CSS_NAME}>
            <Header />
            <SearchField categories={data.categories} />
            <CoursesList courses={data} />
            <Paginator currentPage={page} setPage={setPage} numberOfCourses={data.length} />
        </div>
    );
}

export default MainPage;