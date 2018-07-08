'use strict'; 

/* eslint-env node */


const express = require('express');
const router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

router.post('/signin/:id', (req, res) => {
  let token = req.body.id;
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "1074020877158-eb30cjftrhcvulod09gqgtbnbjqj7srg.apps.googleusercontent.com"  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }
  verify().catch(console.error);
  console.log('fjhlajksdhfjadhf');
  res.render('profile', {title: 'Profile Page'});
});

module.exports = router;