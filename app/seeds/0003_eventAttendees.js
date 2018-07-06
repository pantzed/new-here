
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('eventAttendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('eventAttendees').insert([
        {event: 1, attendee: 1}
      ]);
    });
};
