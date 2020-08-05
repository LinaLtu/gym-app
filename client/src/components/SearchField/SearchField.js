import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import SearchDatePicker from './DatePicker';
import CategoryPicker from './CategoryPicker';
import './SearchField.scss';

const CSS_NAME = 'search-field'

const SearchField = ({ date, setCategories, setDate }) => {
    return (
        <div className={CSS_NAME}>
            <div className={`${CSS_NAME}_start-date`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Start Date</label>
                < SearchDatePicker callback={setDate} date={moment(date).toDate()} />
            </div>
            <div className={`${CSS_NAME}_category`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Category</label>
                < CategoryPicker callback={setCategories} />
            </div>
        </div>
    )
}

SearchField.propTypes = {
    date: PropTypes.string.isRequired,
    setCategories: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired
};

export default SearchField;