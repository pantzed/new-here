
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_events').insert([
        {admin: 1, event: 1}
      ]);
    });
};
