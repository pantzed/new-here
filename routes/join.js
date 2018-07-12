'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const updateProfileRender = require('../refreshRenderData');


router.get('/join', (req, res) => {
  res.render('index', {title: 'Index'});
});

router.post('/join/:id', (req, res) => {
  let user = req.body.userId;
  let event = req.params.id;

  knex('events')
  .join('event_attendees', 'events.id', '=', 'event_attendees.event')
  .select('event_attendees.attendee', 'events.title', 'events.description', 'events.date', 'events.location', 'events.id')
  .where('event_attendees.attendee', user)
  .andWhere('event_attendees.event', event)
  .then((userEvents) => {
    if (userEvents.length < 1){
      knex('event_attendees')
        .insert({
          event: event,
          attendee: user
        })
        .then(() => {
          console.log(req.session.renderProfileInfo);
          res.redirect('/profile');
        })
      }
      else {
        return new Promise(new Error("You're already signed up for this event!"));
      }
    })
  .catch((error) => {
    res.render('error', {error: 403, message: error.message, stack: "Stack"} );
  })
});

router.delete('/join/:id/leave', (req, res) => {
  let event = req.params.id;
  let user = req.body.user;
  knex('event_attendees').where('attendee', user).andWhere('event', event)
  .del()
  .then(() => {
    return updateProfileRender.refreshProfileRenderData(res, user);
  })
  .then((render) => {
    res.redirect('/profile');
  })
  .catch((error) => {
    res.render('error', {error: 403, message: error.message, stack: "Stack"} );
  });
});

module.exports = router;