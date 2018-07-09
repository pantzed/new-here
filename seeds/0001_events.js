
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          title: 'Jugglers and Shit', 
          description: 'Bacon ipsum dolor amet rump pork t-bone, jerky shank brisket chicken pastrami fatback pancetta tri-tip shankle capicola sausage. Meatloaf biltong beef ribs andouille swine spare ribs pork chop shoulder ham hock landjaeger cow alcatra flank tongue. Pork belly biltong filet mignon pastrami boudin beef ribs. Chicken cupim drumstick ham hock. Tenderloin sirloin buffalo jerky sausage doner ham hock pig prosciutto. Pig fatback shank, tenderloin short ribs alcatra bresaola flank sirloin chuck pancetta capicola cow. Flank turkey beef ribs, kielbasa sausage corned beef turducken ground round cow pork belly ham hock rump chicken burgdoggen shankle.', 
          location: 'Austin, TX', 
          messages: 'Some text file with messages',
          photo: 'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
          admin: 1
        },
        {
          title: 'Rave People', 
          description: 'Bacon ipsum dolor amet rump pork t-bone, jerky shank brisket chicken pastrami fatback pancetta tri-tip shankle capicola sausage. Meatloaf biltong beef ribs andouille swine spare ribs pork chop shoulder ham hock landjaeger cow alcatra flank tongue. Pork belly biltong filet mignon pastrami boudin beef ribs. Chicken cupim drumstick ham hock. Tenderloin sirloin buffalo jerky sausage doner ham hock pig prosciutto. Pig fatback shank, tenderloin short ribs alcatra bresaola flank sirloin chuck pancetta capicola cow. Flank turkey beef ribs, kielbasa sausage corned beef turducken ground round cow pork belly ham hock rump chicken burgdoggen shankle.', 
          location: 'Austin, TX', 
          messages: 'Some text file with messages',
          photo: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          admin: 1
        },
      ]);
    });
};
