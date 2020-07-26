module.exports = class Course {
    constructor({ _id, name, description, startDate, categorty }) {
        this.id = _id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.categorty = categorty;
    }
}