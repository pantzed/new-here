
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userEvents', (table) => {
    table.integer('admin').unsigned();
    table.foreign('admin').references('users.id');
    table.integer('event').unsigned();
    table.foreign('event').references('events.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userEvents');
};
