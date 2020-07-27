const express = require('express');
const moment = require('moment');
const mongoInitializer = require('../src/infra/mongo/index');

const WANTED_COURSES = 100;
const CATEGORIES = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const seedApp = async (app) => {
    await mongoInitializer(app);
    const courseModel = app.get('courseModel');

    const courseNumber = await courseModel.count();

    // Add as many courses as needed to have WANTED_COURSES courses in the db
    const coursesToAdd = WANTED_COURSES - courseNumber;
    console.log(`There are already ${courseNumber} courses, ${coursesToAdd} to be added`);

    // Array of Courses we want to add
    const courses = [];

    for (let i = 1; i <= coursesToAdd; i++) {
        courses.push({
            name: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
            description: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
            category: CATEGORIES[getRandomIntInclusive(0, 6)],
            startDate: getRandomDate(
                moment().toDate(),
                moment().add(12, 'months').toDate()
            )
        })
    }

    await courseModel.insertMany(courses);

    const updatedCourseNumber = await courseModel.count();
    console.log(`There are now ${updatedCourseNumber} courses!`);

    return app;
}

const app = express();

seedApp(app)
    .then(() => {
        console.log('Seeded!');
    })
