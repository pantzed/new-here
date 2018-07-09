'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

router.get('/', (req, res) => {
  res.render('index', {title: 'Welcome Page'});
});

router.post('/user/add', (req, res) => {
  for (let key in req.body) {
    console.log(req.body[key]);
  }
  res.render('profile', {title: 'Profile'})
});

module.exports = router;
