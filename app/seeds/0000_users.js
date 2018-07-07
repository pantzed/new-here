
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'edpantzar@gmail.com', password: 'supainsecure123', first_name: 'Ed', last_name: 'Pantzar', age: 29, location: "Austin, TX", photo: 'url', user_type:'admin'}
      ]);
    });
};
