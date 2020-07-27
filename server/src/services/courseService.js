module.exports = class CourseService {
    constructor(courseRepo) {
        this.courseRepo = courseRepo;
        this.DEFAULT_LIMIT = 20;
    }

    /**
     * @param {Moment} startDate 
     * @param {string[]} categories 
     * @param {number} page 
     * @returns Promise<Course[]>
     */
    async getCourses(startDate, categories = [], page = 1) {
        const offset = (page - 1) * 20;

        return await this.courseRepo.findFromDate(
            startDate,
            categories,
            offset,
            this.DEFAULT_LIMIT,
        );
    }
}