const mongoose = require('mongoose');
const courseSchemaCreator = require('./schemas/courses');

module.exports = async (app) => {
    const mongoUri = process.env.MONGO_URI
        ? process.env.MONGO_URI
        : `mongodb://localhost:27017/gymondo-${process.env.NODE_ENV || 'dev'}`;

    await mongoose.connect(mongoUri, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

    const coursesSchema = courseSchemaCreator(mongoose);

    // The following tweak allows for seeding in testing directly using Mongoose to handle DB operations
    let course;

    try {
        course = mongoose.model('courses', coursesSchema);
    } catch (error) {
        course = mongoose.model('courses');
    }

    app.set('courseModel', course);

    return mongoose;
}