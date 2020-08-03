import React, { useState } from "react";
import DatePicker from "react-datepicker";

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

export default SearchDatePicker;