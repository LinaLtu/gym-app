import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import { getCourseById } from '../../services/courseService'
import './DetailsPage.scss';

const CSS_NAME = 'details-page';


const DetailsPage = (props) => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push("/");
    }

    const courseId = props.match.params.courseId;

    const { data, status } = useQuery(['courses', courseId], (_, courseId) => getCourseById(courseId));

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error!</div>;
    }

    return (
        <div className={CSS_NAME}>
            <Header />
            <div className={`${CSS_NAME}_course-card`}>
                <div className={`${CSS_NAME}_course-name`}>{data.name}</div>
                <div className={`${CSS_NAME}_details`}>{data.startDate} | {data.category}</div>
                <div className={`${CSS_NAME}_description`}>{data.description}</div>
                <button className={`${CSS_NAME}_back-button`} onClick={handleOnClick} >Go Back</button>
            </div>
        </div >
    )

}

export default DetailsPage;