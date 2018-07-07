
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_attendees').insert([
        {event: 1, attendee: 1}
      ]);
    });
};
