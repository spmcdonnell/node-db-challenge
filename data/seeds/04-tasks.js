exports.seed = function(knex) {
    return knex('tasks')
        .truncate()
        .then(function() {
            return knex('tasks').insert([{ project_id: 1, description: 'Buy supplies' }, { project_id: 1, description: 'Paint the house with purchased supplies' }, { project_id: 2, description: 'Get needed supplies' }, { project_id: 2, description: 'Move the furniture from point A to B' }]);
        });
};
