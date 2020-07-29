const CourseService = require('../services/courseService');
const moment = require('moment');

module.exports = (app) => {
    app.get('/courses', async (req, res) => {
        const parsedPage = parseInt(req.query.page, 10);


        const page = parsedPage > 0
            ? parsedPage
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
                _id: course._id.toString(),
                name: course.name,
                description: course.description,
                startDate: course.startDate.toISOString(),
                category: course.category
            }))
        })
    });

    app.get('/courses/:id', async (req, res) => {
        const id = req.params.id;

        const courseService = new CourseService(app.get('courseService'));

        try {
            const course = await courseService.getCourseById(id);

            return res.json({
                data: {
                    _id: course._id.toString(),
                    name: course.name,
                    description: course.description,
                    startDate: course.startDate.toISOString(),
                    category: course.category
                }
            })

        } catch (e) {
            if (e.message === 'Course not found') {
                return res.status(404).json({
                    error: 'Course not found'
                })
            } else {
                console.error(e);
                return res.status(500).json({
                    error: 'Internal error'
                })
            }
        }

    });
}