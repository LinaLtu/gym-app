## Gym App

This repository includes a simple React application, which displays a list of courses, coming from a Node.js based Back End, using MongoDB as database (at the moment seeded with dummy data). The user is able to pick courses by date and/or by category. When the user clicks on any course, they are redirected to a page with more details about the course. They can go back to the home page any time by clicking on the logo in the header.

## Requirements

- Node.js v12+
- Docker

### To Run the App

In order to run the Back End, you need to go to `server` directory, then:

- run `npm install`

- to start the conteinerized MongoDB, run `docker-compose up` (`TMPDIR=/private$TMPDIR docker-compose up` for MacOS)

- to populate the database with dummy courses, run `node scripts/seeder`

- run `npm start`

Then the client can be started, under the `client` folder:

- run `npm install`
- run `npm start`

### Tests

To launch the test runner for the, run `npm test` in the `client` directory (currently available for the client only).
