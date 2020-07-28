import React, { useState } from 'react';
import './Paginator.scss';

const CSS_NAME = 'paginator'

const Paginator = ({ currentPage, setPage, numberOfCourses }) => {

    const [showRightArrow, setShowRightArrow] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(true);

    if (numberOfCourses <= 0) {
        setShowLeftArrow(false);
    }

    let openPage = currentPage;

    const handleGoBack = () => {
        if (openPage <= 1) {
            setShowRightArrow(false);
            return;
        }
        const page = openPage - 1;
        setPage(page);
    }

    const handleGoForward = () => {
        const page = openPage + 1;
        setPage(page);
    }

    return (
        <div className={CSS_NAME}>
            {showRightArrow && <span className={`${CSS_NAME}_arrow`} onClick={handleGoBack}>&#8592;</span >}
            <span>{currentPage}</span>
            {showLeftArrow && <span className={`${CSS_NAME}_arrow`} onClick={handleGoForward}>&#8594;</span>}
        </div >
    )
}

export default Paginator