const Course = require('../../models/course');

module.exports = class CourseRepo {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }

    async find(offset = 0, limit = 20) {
        const coursesData = await this.courseModel.find()
            .limit(limit)
            .skip(offset)
            .lean()
            .exec();

        return coursesData.map((courseData) => new Course(courseData));
    }
}