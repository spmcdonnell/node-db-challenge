const express = require('express');
const Projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects().then(projects => {
        res.status(200).json(projects);
    });
});

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.getProjectTasks(id).then(tasks => {
        res.status(200).json(tasks);
    });
});

router.post('/', (req, res) => {
    Projects.addProject(req.body).then(project => {
        res.status(200).json(project);
    });
});

router.post('/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.addTask(id, req.body).then(task => {
        res.status(200).json(task);
    });
});

module.exports = router;
