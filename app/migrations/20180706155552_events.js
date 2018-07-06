
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('date').notNullable();
    table.string('location').notNullable();
    table.string('messages');
    table.integer('admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
