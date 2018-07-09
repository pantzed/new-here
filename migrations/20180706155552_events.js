
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.timestamp('date').defaultTo(knex.fn.now()).notNullable();
    table.string('location').notNullable();
    table.string('messages');
    table.string('photo');
    table.integer('admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
