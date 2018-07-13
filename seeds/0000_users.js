
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'edpantzar@gmail.com', password: 'supainsecure123', first_name: 'Ed', last_name: 'Pantzar', age: 29, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/18485764_1935138130057097_1699623581084543665_n.jpg?_nc_cat=0&oh=2fdbed35f2d9bd689fd72ccf2255b724&oe=5BDD39A2', user_type:'admin'},
        {username: 'jake@gmail.com', password: 'pass', first_name: 'Jake', last_name: 'Lewis', age: 25, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/37044888_10214480424019230_3844301398447489024_o.jpg?_nc_cat=0&oh=504b6ecc45c431e14de73e5fd463340f&oe=5BDC3BAF', user_type:'user'},
        {username: 'amanda@gmail.com', password: 'pass', first_name: 'Amanda', last_name: 'Rutherfoord', age: 31, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/31880913_10107477846896772_5557386105600344064_n.jpg?_nc_cat=0&oh=04b00325851e087c9d0ce1c67ff8ce5d&oe=5BCF3798', user_type:'user'},
        {username: 'dirk@gmail.com', password: 'pass', first_name: 'Dirk', last_name: 'Ruschhaupt', age: 36, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/27971838_10211141295864606_2112487746450829741_n.jpg?_nc_cat=0&oh=eddd53139b6df377399855ab212a4584&oe=5B9F21C4', user_type:'user'},
        {username: 'dave@gmail.com', password: 'pass', first_name: 'David', last_name: 'Miller', age: 36, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/12278993_487770364735547_2439397875720257873_n.jpg?_nc_cat=0&oh=69116585fb31d2c436224de5ca56858f&oe=5BD175CF', user_type:'user'},
        {username: 'ryan@gmail.com', password: 'pass', first_name: 'Ryan', last_name: 'Borgstrom', age: 18, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/28872185_10156213210833894_8425810948246097782_n.jpg?_nc_cat=0&oh=efa0d9cf36b932ba22f9bdd1d93d05ed&oe=5BE08FC8', user_type:'user'},
        {username: 'ryder@gmail.com', password: 'pass', first_name: 'Ryder', last_name: 'Dale', age: 26, city: "Austin", state: "TX", photo: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p320x320/27867684_10157314181712715_5045844523595311755_n.jpg?_nc_cat=0&oh=33515c5922ec41357a21557806bb27b7&oe=5B9FE8A8', user_type:'user'}        
      ]);
    });
};
