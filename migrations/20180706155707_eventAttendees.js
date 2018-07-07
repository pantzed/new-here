
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_attendees', (table) => {
    table.integer('event').unsigned();
    table.foreign('event').references('events.id');
    table.integer('attendee').unsigned();
    table.foreign('attendee').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event_attendees');
};
