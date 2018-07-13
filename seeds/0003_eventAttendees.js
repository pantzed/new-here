
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_attendees').insert([
        {event: 1, attendee: 1},
        {event: 1, attendee: 2},
        {event: 1, attendee: 3},
        {event: 1, attendee: 4},
        {event: 1, attendee: 5},
        {event: 2, attendee: 2},
        {event: 2, attendee: 3},
        {event: 2, attendee: 4},
        {event: 2, attendee: 5},
        {event: 2, attendee: 6},
        {event: 3, attendee: 1},
        {event: 3, attendee: 2},
        {event: 3, attendee: 3},
        {event: 3, attendee: 4},
        {event: 3, attendee: 5},
        {event: 4, attendee: 2},
        {event: 4, attendee: 3},
        {event: 4, attendee: 4},
        {event: 4, attendee: 5},
        {event: 4, attendee: 6}
      ]);
    });
};
