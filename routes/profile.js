'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/profile', (req, res) => {
  res.render('profile', {title: 'Profile Page'});
});

router.get('/profile/edit', (req, res) => {
  res.render('edit_profile', {title: 'Edit Profile Page'});
});

router.post('/profile', (req, res) => {
  let render = {};
  render.title = `Profile Page`;

  knex('users')
  .where('username', req.body.username)
  .then((user) => {
    render.first_name = user[0].first_name;
    render.last_name = user[0].last_name;
    render.city = user[0].city;
    render.state = user[0].state;
    render.age = user[0].age;
    return user[0];
  })
  .then((user) => {
    knex('events')
    .join('event_attendees', 'events.id', '=', 'event_attendees.event')
    .select('event_attendees.attendee', 'events.title', 'events.description', 'events.date', 'events.location', 'events.id')
    .where('event_attendees.attendee', user.id)
    .then((events) => {
      render.events = events;
    })
    .then(() => {
      knex('events')
      .then((allEvents) => {
        render.allEvents = allEvents;
      })
      .then(() => {
        knex('locations').where('city', 'Austin')
        .then((city) => {
          render.cityDescription = city[0].description;
        })
        .then(() => {
          res.render('profile', render);
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

module.exports = router;