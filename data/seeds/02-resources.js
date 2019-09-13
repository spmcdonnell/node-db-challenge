exports.seed = function(knex) {
    return knex('resources')
        .truncate()
        .then(function() {
            return knex('resources').insert([{ name: 'Paint' }, { name: 'Paint brushes', description: 'Better get ones of various sizes' }, { name: 'Those paint holder tray things' }, { name: 'Paint roller' }, { name: 'Paint roller brushes' }, { name: 'Uhaul truck' }, { name: 'Dolly' }, { name: 'Blankets', description: 'For protecting furniture' }]);
        });
};
