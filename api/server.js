const express = require('express');
const projectsRouter = require('./projects/projectsRoutes.js');
const resourcesRouter = require('./resources/resourcesRoutes.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

server.get('/', (req, res) => {
    res.send('<h1>Projects API Up and Running!</h1>');
});

module.exports = server;
