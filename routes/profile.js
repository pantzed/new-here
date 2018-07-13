'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/profile', (req, res) => {
  let user = req.session.userInfo;
  let title = `Profile Page`;
  let noEvents = `You have no events planned!`;
  knex('events')
  .join('event_attendees', 'events.id', '=', 'event_attendees.event')
  .select('event_attendees.attendee', 'events.title', 'events.description', 'events.date', 'events.location', 'events.id', 'events.photo')
  .where('event_attendees.attendee', user.id)
  .then((events) => {
    user.events = events;
  })
  .then(() => {
    knex('events')
    .then((allEvents) => {
      user.allEvents = allEvents;
    })
    .then(() => {
      knex('locations').where('city', 'Austin')
      .then((city) => {
        user.cityDescription = city[0].description;
      })
      .then(() => {
        req.session.profileRenderInfo = {title: title, noEvents: noEvents, user: user};
        res.render('profile', {title: title, noEvents: noEvents, user: user});
      });
    });
  });
});

/* ------------------------------------- */
/* These two routes work together to     */
/* load and render the edit profile page */
router.get('/profile/:id/edit', (req, res) => {
  req.session.editProfileId = req.params.id;
  res.redirect('/edit_profile'); 
});

router.get('/edit_profile', (req, res) => {
  knex('users').where('id', req.session.editProfileId)
  .then((user) => {
    res.render('edit_profile', {title: 'Edit Profile Page', user: user[0]});
  })
});
/* ------------------------------------- */

router.post('/profile', (req, res) => {
  //Verify that the user exists
  knex('users').where('username', req.body.username)
  .then((user) => {
    if (user.length !== 1) {
      res.sendStatus(403);
    }
    if (user[0].password === req.body.password) {
      req.session.userInfo = user[0];
    }
    else {
      res.sendStatus(403);
    }
    return req.session.userInfo
  })
  .then(() => {
    let user = {};
    let title = `Profile Page`;
    let noEvents = `You have no events planned!`;
    knex('users')
    .where('username', req.body.username)
    .then((user) => {
      user.first_name = user[0].first_name;
      user.last_name = user[0].last_name;
      user.city = user[0].city;
      user.state = user[0].state;
      user.age = user[0].age;
      user.id = user[0].id;
      return user[0];
    })
    .then((user) => {
      knex('events')
      .join('event_attendees', 'events.id', '=', 'event_attendees.event')
      .select('event_attendees.attendee', 'events.title', 'events.description', 'events.date', 'events.location', 'events.id')
      .where('event_attendees.attendee', user.id)
      .then((events) => {
        user.events = events;
      })
      .then(() => {
        knex('events')
        .then((allEvents) => {
          user.allEvents = allEvents;
        })
        .then(() => {
          knex('locations').where('city', 'Austin')
          .then((city) => {
            user.cityDescription = city[0].description;
          })
          .then(() => {
            req.session.profileRenderInfo = {title: title, noEvents: noEvents, user: user};
            res.redirect('/profile');
          });
        });
      });
    });
  });
});

router.post('/profile/new_user', (req, res) => {
  let user = {};
  
  knex('users')
  .where('username', req.body.username)
  .then((existingUser) => {
    if (existingUser.length > 0) {
      res.redirect('/signin');
    }
    else {
      for (let key in req.body) {
        user[key] = req.body[key];
      }
    }
  })
  .then(() => {
    knex('users')
    .insert(user)
    .then(() => {
      knex('users')
      .where('username', req.body.username)
      .then((userData) => {
        res.render('profile', 
        {
        title: 'Profile',
        first_name: userData[0].first_name,
        location: userData[0].location
        })
      })
    })
  })
});

router.get('/profile/:id/edit', (req, res) => {
  let update = {};
  for (let key in req.body) {
    update[key] = req.body[key];
  }
  knex('users').where('id', req.params.id)
  .update(update)
  .then(() => {
    knex('users').where('id', req.params.id)
    .then((user) => {
      res.render('profile', {title: 'Profile Page', user: user});
    })
  })
});

// For this post route to work, I need to pull in all of the same data
// as the profile post route.
router.put('/profile/:id/edit', (req, res) => {
  let update = {};
  for (let key in req.body) {
    update[key] = req.body[key];
  }
  knex('users').where('id', req.params.id)
  .update(update)
  .then(() => {
    knex('users').where('id', req.params.id)
    .then((user) => {
      res.render('profile', {title: 'Profile Page', user: user});
    })
  })
});

router.delete('/profile/:id', (req, res) => {
  knex('users').where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/');
  });
});

module.exports = router;