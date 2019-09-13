exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 512)
                .notNullable()
                .unique();
            tbl.text('description');
            tbl.boolean('completed').defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 255)
                .notNullable()
                .unique();
            tbl.text('description');
        })
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.text('description').notNullable();
            tbl.text('notes');
            tbl.boolean('completed').defaultTo(false);
        });
};

exports.down = function(knex) {};
