import React, { useState } from 'react';
import './SearchField.scss';

const CSS_NAME = 'search-field'

const SearchField = () => {
    const [itemsByStartDate, setItemsByStartDate] = useState(['all', 'today', 'tomorrow', 'Monday']);
    const [itemsByCategory, setitemsByCategory] = useState(['all', 'zumba', 'body pump', 'body attack']);

    const searchOptionsByStartDate = itemsByStartDate.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ));

    const searchOptionsByCategory = itemsByCategory.map((item, index) => (
        <option value={item} key={index}>{item}</option>
    ));

    const handleChange = () => {
        console.log('Selected')
    }

    const handleButtonClick = () => {
        console.log("The Search button has been clicked!")
    }

    return (
        <div className={CSS_NAME}>
            <div className={`${CSS_NAME}_start-date`}>
                <label for="byStartDate">Search By Start Date </label>
                <select value={'item'} onChange={handleChange}>
                    {searchOptionsByStartDate}
                </select>
            </div>
            <div className={`${CSS_NAME}_category`}>
                <label for="byStartDate">Search By Category </label>
                <select value={'item'} onChange={handleChange}>
                    {searchOptionsByCategory}
                </select>
            </div>
            <button className={`${CSS_NAME}_cta`} onClick={handleButtonClick}>Search!</button>
        </div>
    )
}

export default SearchField;