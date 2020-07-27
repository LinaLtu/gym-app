import axios from 'axios';
import config from '../config'

/**
 * 
 * @param {Moment} startDate 
 * @param {string[]} categories 
 * @param {number} page 
 */
export const getCourses = async (startDate, categories = [], page = 1) => {
    return (await axios.get(config.coursesApi.url, {
        params: {
            startDate: startDate.format('YYYY-MM-DD'),
            categories,
            page
        }
    })).data.data;
}