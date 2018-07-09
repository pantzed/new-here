
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'edpantzar@gmail.com', password: 'supainsecure123', first_name: 'Ed', last_name: 'Pantzar', age: 29, city: "Austin", state: "TX", photo: 'https://cdn3.iconfinder.com/data/icons/web-ui-3/128/Account-2-512.png', user_type:'admin'}
      ]);
    });
};
