'use strict'; 

/* eslint-env node */

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);


module.exports = {
  refreshProfileRenderData: function(res, userId) {
    console.log('initiated');
    let id = userId;
    let title = `Profile`;
    let noEvents = `You have no events planned`;
    let user = {};

    return knex('events')
    .join('event_attendees', 'events.id', '=', 'event_attendees.event')
    .select('event_attendees.attendee', 'events.title', 'events.description', 'events.date', 'events.location', 'events.id')
    .where('event_attendees.attendee', id)
    .then((events) => {
      user.events = events;
      return null;
    })
    .then(() => {
      return knex('events')
      .then((allEvents) => {
        user.allEvents = allEvents;
      })
      .then(() => {
        return knex('locations').where('city', 'Austin')
        .then((city) => {
          user.cityDescription = city[0].description;
        })
      });
    })
    .then(() => {
      console.log('applied');
      console.log({title: title, noEvents: noEvents, user: user});
      return ({title: title, noEvents: noEvents, user: user});
    });
  }
};