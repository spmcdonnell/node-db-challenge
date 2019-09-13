const express = require('express');
const Projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects().then(projects => {
        res.status(200).json(projects);
    });
});

module.exports = router;
