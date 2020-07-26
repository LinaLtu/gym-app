const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoInitializer = require('./infra/mongo/index');
const CourseRepo = require('./infra/repos/courseRepo');
const apis = require('./api/courses');

const loadApp = async (app) => {
    await mongoInitializer(app);

    const courseService = new CourseRepo(app.get('courseModel'));
    app.set('courseService', courseService);

    apis(app);

    return app;
}

module.exports = (app) => {
    app.use(helmet());

    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());

    /**
     * Use CORS and enable pre-flight across all routes.
     */
    app.use(cors({
        allowedHeaders: ['Authorization', 'Content-Type', 'X-Requested-With'],
        exposedHeaders: ['Authorization', 'Content-Type'],
    }));

    app.options('*', cors({
        allowedHeaders: ['Authorization', 'Content-Type', 'X-Requested-With'],
        exposedHeaders: ['Authorization', 'Content-Type'],
    }));

    process.on('uncaughtException', (err) => {
        console.log(`${new Date().toISOString()} uncaughtException`, err);
        console.error(err.message);
        console.error(err.stack);
        process.exit(1);
    });

    process.on('unhandledRejection', (err) => {
        console.log(`${new Date().toISOString()} unhandledRejection`, err);
        console.error(err.message);
        console.error(err.stack);
        process.exit(1);
    });

    return loadApp(app)
        .then((expressApp) => {
            return { app: expressApp };
        });
}
