'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);


router.get('/events/add', (req, res) => {
  res.render('create_event', {title: "Create an Event"});
});

router.get('/events/:id/edit', (req, res) => {
  res.render('edit_event', {title: 'Edit Event'});
});

router.get('/events/:id', (req, res) => {
  knex('events')
  .where('id', req.params.id)
  .then((event) => {
    return event[0];
  })
  .then((event) => {
    knex('event_attendees').where('event_attendees.event', req.params.id)
    .join('users', 'event_attendees.attendee', 'users.id')
    .select('users.first_name', 'users.last_name', 'users.photo')
    .then((attendees) => {
      res.render('event', {title: 'This Event', noAttendees: 'Be the first to sign up!', event: event, attendees: attendees, user: req.session.userInfo});
    });
  });
});

router.get('/events', (req, res) => {
  knex('events')
  .then((events) => {
    console.log(req.session.userInfo);
    res.render('events', {title: 'Events Page', noEvents: 'There are no events available', events: events, user: req.session.userInfo});
  })
});

router.post('/events/add', (req, res) => {
  let update = {};
  update.title = req.body.title;
  update.description = req.body.description;
  update.date = req.body.date;
  update.location = req.body.location;
  update.photo = req.body.photo;
  knex('events')
  .insert(update)
  .then(() => {
    knex('events')
    .then((events) => {
      res.render('events', {title: 'Events', events: events});
    });
  });
});

module.exports = router;