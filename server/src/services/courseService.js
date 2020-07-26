module.exports = class CourseService {
    constructor(courseRepo) {
        this.courseRepo = courseRepo;
        this.DEFAULT_LIMIT = 20;
    }

    async getCourses(page = 1) {
        const offset = (page - 1) * 20;

        return await this.courseRepo.find(offset, this.DEFAULT_LIMIT);
    }
}