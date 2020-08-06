import React, { useState } from "react";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import moment from 'moment';


import "react-datepicker/dist/react-datepicker.css";

const SearchDatePicker = ({ callback, date }) => {
    const [selectedDate, setSelectedDate] = useState(date ?? new Date());

    const handleChange = date => {
        setSelectedDate(date);
        callback(date);
    };

    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleChange}
        />
    );
}

SearchDatePicker.propTypes = {
    callback: PropTypes.func.isRequired,
    date: PropTypes.instanceOf(moment).isRequired
};

export default SearchDatePicker;