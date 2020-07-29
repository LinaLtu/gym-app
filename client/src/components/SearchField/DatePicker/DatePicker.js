import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const SearchDatePicker = ({ setItemsByDate }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange = date => {
        console.log('received from picker', date, typeof date);

        setSelectedDate(date);

        setItemsByDate(date ? moment(date) : moment());
    };

    return (
        <DatePicker
            selected={selectedDate}
            onChange={handleChange}
        />
    );
}

export default SearchDatePicker;