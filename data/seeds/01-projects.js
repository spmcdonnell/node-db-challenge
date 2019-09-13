exports.seed = function(knex) {
    return knex('projects')
        .truncate()
        .then(function() {
            return knex('projects').insert([{ name: 'Paint house', description: 'Pretty self explanatory...' }, { name: 'Move furniture into storage', description: "Take stuff you don't really need and put it somwhere where it's not in the way" }]);
        });
};
