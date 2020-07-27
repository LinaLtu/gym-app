/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import Header from '../Header';
import SearchField from '../SearchField';
import CoursesList from '../CoursesList';
import { getCourses } from '../../services/courseService'

import './MainPage.scss';

const CSS_NAME = 'main-page'

const MainPage = () => {
    const [page, setPage] = useState(1);

    const { data, status } = useQuery(['courses', page], (_, page) => getCourses(moment(), [], page));

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error!</div>;
    }

    return (
        <div className={CSS_NAME}>
            <Header />
            <SearchField />
            <CoursesList courses={data} />
        </div>
    );
}

export default MainPage;