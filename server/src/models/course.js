module.exports = class Course {
    constructor({ _id, name, description, startDate, category }) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.category = category;
    }
}