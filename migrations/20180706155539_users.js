
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.integer('age').unsigned();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('photo');
    table.string('user_type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
