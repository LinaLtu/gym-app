import React, { useState } from 'react';
import './Paginator.scss';

const CSS_NAME = 'paginator'

const Paginator = ({ currentPage, setPage, dataLength }) => {


    const [showRightArrow, setShowRightArrow] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(false);


    let openPage = currentPage;

    if (openPage > 1 && !showLeftArrow) {
        setShowLeftArrow(true);

    }

    const handleGoBack = () => {
        const page = openPage - 1;
        if (page === 1) {
            setShowLeftArrow(false);
        }

        if (!showRightArrow) {
            setShowRightArrow(true);
        }

        setPage(page);
    }

    const handleGoForward = () => {
        if (dataLength < 20) {
            setShowRightArrow(false);
        }


        const page = openPage + 1;

        if (page === 1) {
            setShowLeftArrow(false);
        }

        setPage(page);
    }

    return (
        <div className={CSS_NAME}>
            {showLeftArrow && <span className={`${CSS_NAME}_arrow`} onClick={handleGoBack}>&#8592;</span >}
            <span>{currentPage}</span>
            {showRightArrow && <span className={`${CSS_NAME}_arrow`} onClick={handleGoForward}>&#8594;</span>}
        </div >
    )
}

export default Paginator