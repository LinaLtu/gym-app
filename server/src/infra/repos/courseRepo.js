const Course = require('../../models/course');

module.exports = class CourseRepo {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }

    /**
     * @param {Moment} fromDate 
     * @param {string[]} categories 
     * @param {number} offset 
     * @param {number} limit 
     * @return Promise<Course[]>
     */
    async findFromDate(fromDate, categories = [], offset = 0, limit = 20) {
        const coursesData = await this.courseModel
            .find({
                startDate: {
                    $gte: fromDate.toDate(),
                    $lte: fromDate.clone().add(12, 'months')
                },
                ...(categories.length > 0 && {
                    category: {
                        $in: categories
                    }
                })
            })
            .sort({
                startDate: 1
            })
            .limit(limit)
            .skip(offset)
            .lean()
            .exec();


        return coursesData.map((courseData) => new Course(courseData));
    }

    async findById(id) {
        const courseData = await this.courseModel
            .findById(id)
            .lean()
            .exec();

        if (!courseData) {
            return;
        }

        return new Course(courseData);
    }
}