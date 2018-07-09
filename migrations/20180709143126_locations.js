exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.text('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
