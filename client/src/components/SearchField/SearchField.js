import React, { useState } from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import { getCourses } from '../../services/courseService'
import SearchDatePicker from './DatePicker';
import CategoryPicker from './CategoryPicker';
import './SearchField.scss';

const CSS_NAME = 'search-field'

const SearchField = ({ page }) => {

    const [category, setCategory] = useState([]);
    const [date, setDate] = useState(moment());

    const { status } = useQuery(['courses', page, date, category], (_, page, date, category) => getCourses(moment(date), category, page));

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error!</div>;
    }

    return (
        <div className={CSS_NAME}>
            <div className={`${CSS_NAME}_start-date`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Start Date </label>
                < SearchDatePicker setItemsByDate={setDate} />
            </div>
            <div className={`${CSS_NAME}_category`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Category </label>
                < CategoryPicker setItemsByCategory={setCategory} />
            </div>
            <button className={`${CSS_NAME}_cta`}>Search!</button>
        </div>
    )
}

export default SearchField;