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

module.exports = router;