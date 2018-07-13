
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_events', (table) => {
    table.integer('admin').unsigned();
    table.foreign('admin').references('users.id').onDelete('cascade');
    table.integer('event').unsigned();
    table.foreign('event').references('events.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_events');
};
