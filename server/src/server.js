const express = require('express');
const application = require('./app');

const expressApp = express();
const port = process.env.PORT || 3010;

expressApp.on('ready', () => {
    expressApp.listen(port, () => console.log(`Application start: listening on port ${port}!`));
});

application(expressApp)
    .then(({ app }) => {
        console.log(`Starting application on port ${port}!`);
        app.emit('ready');
    });