'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/events', (req, res) => {
  res.render('events', {title: 'Events Page'});
});

router.get('/events/event', (req, res) => {
  res.render('event', {title: 'This Event'});
})

router.get('/events/event/edit', (req, res) => {
  res.render('edit_event', ({title: 'Edit Event'}));
})

module.exports = router;