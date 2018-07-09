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
  res.render('event', {title: 'This Event'});
})

router.get('/events', (req, res) => {
  knex('events')
  .then((events) => {
    res.render('events', {title: 'Events Page', noEvents: 'There are no events available', events: events});
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