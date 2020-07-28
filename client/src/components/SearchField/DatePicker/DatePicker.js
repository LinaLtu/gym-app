import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SearchDatePicker = ({ setItemsByDate }) => {

    const handleChange = date => {
        setItemsByDate(date);
    };

    return (
        <DatePicker
            selected={new Date()}
            onChange={handleChange}
        />
    );
}

export default SearchDatePicker;