import React, { useState } from 'react';
import SearchDatePicker from './DatePicker';
import CategoryPicker from './CategoryPicker';
import './SearchField.scss';

const CSS_NAME = 'search-field'

const SearchField = () => {

    const [itemsByCategory, setItemsByCategory] = useState([]);

    const handleButtonClick = () => {
        console.log(itemsByCategory)
    }

    return (
        <div className={CSS_NAME}>
            <div className={`${CSS_NAME}_start-date`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Start Date </label>
                < SearchDatePicker />
            </div>
            <div className={`${CSS_NAME}_category`}>
                <label for="byStartDate" className={`${CSS_NAME}_label`}>Search By Category </label>
                < CategoryPicker setItemsByCategory={setItemsByCategory} />
            </div>
            <button className={`${CSS_NAME}_cta`} onClick={handleButtonClick}>Search!</button>
        </div>
    )
}

export default SearchField;