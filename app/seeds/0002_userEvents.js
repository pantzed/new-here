
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userEvents').del()
    .then(function () {
      // Inserts seed entries
      return knex('userEvents').insert([
        {admin: 1, event: 1}
      ]);
    });
};
