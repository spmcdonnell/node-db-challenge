const db = require('../../data/db-config.js');

module.exports = {
    getProjects,
    getProjectTasks,
    addProject,
    addTask
};

function getProjects() {
    return db('projects').then(projects => {
        const projectsWithBooleanCompleted = projects.map(project => {
            project.completed = Boolean(project.completed);
            return project;
        });
        return projectsWithBooleanCompleted;
    });
}

function getProjectTasks(project_id) {
    return db('projects as p')
        .join('tasks as t', 'p.id', 't.project_id')
        .select('p.name as projectName', 'p.description as projectDescription', 't.id as taskId', 't.project_id as projectId', 't.description as taskDescription', 't.notes as taskNotes', 't.completed')
        .where({ 't.project_id': project_id })
        .then(tasks => {
            const tasksWithBooleanCompleted = tasks.map(task => {
                task.completed = Boolean(task.completed);
                return task;
            });
            return tasksWithBooleanCompleted;
        });
}

function addProject(projectData) {
    return db('projects')
        .insert(projectData)
        .then(addedProject => {
            return addedProject;
        });
}

function addTask(project_id, taskData) {
    return db('tasks')
        .insert({ project_id: project_id, ...taskData })
        .then(addedTask => {
            return addedTask;
        });
}
