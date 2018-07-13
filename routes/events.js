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


/* ------------------------------------- */
/* These two routes work together to     */
/* load and render the edit event page */
router.get('/events/:id/edit', (req, res) => {
  req.session.editEventId = req.params.id;
  console.log(req.session.editEventId);
  res.redirect('/edit_event'); 
});

router.get('/edit_event', (req, res) => {
  knex('events').where('id', req.session.editEventId)
  .then((event) => {
    res.render('edit_event', {title: 'Edit Event Page', event: event[0]});
  })
});
/* ------------------------------------- */

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
      res.redirect(`/events`);
    });
  });
});

router.put('/events/:id', (req, res) => {
  knex('events').where('id', req.params.id)
  .update({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    admin: req.body.admin,
    photo: req.body.photo
  })
  .then(() => {
    res.redirect('/events');
  });
});

router.delete('/events/:id', (req, res) => {
  knex('events').where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/events');
  });
});

module.exports = router;