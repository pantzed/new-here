'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("1074020877158-eb30cjftrhcvulod09gqgtbnbjqj7srg.apps.googleusercontent.com");


router.get('/signin', (req, res) => {
  res.render('signin', {title: 'SignIn Page'});
});

router.post('/signin/:id', (req, res) => {
  function verify() {
    const ticket = client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }
  verify().catch(console.error);
  res.send(`${req.params.id}`);
});

module.exports = router;