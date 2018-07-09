'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/events', (req, res) => {
  knex('events')
  .then((events) => {
    res.render('events', {title: 'Events Page', noEvents: 'There are no events available', events: events});
  })
});

router.get('/events/:id', (req, res) => {
  res.render('event', {title: 'This Event'});
})

router.get('/events/event/edit', (req, res) => {
  res.render('edit_event', ({title: 'Edit Event'}));
})

router.get('/events/add', (req, res) => {
  res.render('create_event', ({title: "Create an Event"}));
});

module.exports = router;