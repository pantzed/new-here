
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {title: 'First Event', description: 'A fun and exciting first event', location: 'Austin, TX', messages: 'Some text file with messages', admin: 1}
      ]);
    });
};
