const CourseService = require('../services/courseService');
const moment = require('moment');

module.exports = (app) => {
    app.get('/courses', async (req, res) => {
        const page = req.query.page && Number.isInteger(req.query.page) && req.query.page > 0
            ? req.query.page
            : 1;

        const startDate = req.query.startDate;

        if (!startDate) {
            return res.status(412).json({ error: 'startDate is compulsory' })
        }

        const startDateMoment = moment(startDate);

        if (!startDateMoment.isValid()) {
            return res.status(412).json({ error: 'startDate is invalid' })
        }

        const categories = req.query.categories && Array.isArray(req.query.categories)
            ? req.query.categories
            : [];

        const courseService = new CourseService(app.get('courseService'));

        const courses = await courseService.getCourses(startDateMoment, categories, page);

        res.json({
            data: courses.map(course => ({
                _id: course._id,
                name: course.name,
                description: description,
                startDate: course.startDate.toISOString(),
                category: course.category
            }))
        })
    });
}