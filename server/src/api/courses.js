const CourseService = require('../services/courseService');

module.exports = (app) => {
    app.get('/courses', async (req, res) => {
        const page = req.query.page && Number.isInteger(req.query.page) && req.query.page > 0
            ? req.query.page
            : 1;

        const courseService = new CourseService(app.get('courseService'));

        const courses = await courseService.getCourses(page);

        res.json(courses.map(course => ({
            _id: course._id,
            name: course.name,
            description: description,
            startDate: course.startDate.toISOString(),
            category: course.category
        })))
    });
}