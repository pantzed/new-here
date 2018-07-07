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

module.exports = router;