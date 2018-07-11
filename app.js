'use strict'; 

/* eslint-env node */


const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const port = process.env.PORT || 8000;

const index = require('./routes/index');
const profile = require('./routes/profile');
const events = require('./routes/events');
const signin = require('./routes/signin');
const join = require('./routes/join');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(session({
  name: 'server-session-cookie-id',
  secret: 'skdjfhlakjsdfhlakjfhlkjfhalsj',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(index);
app.use(profile);
app.use(events);
app.use(signin);
app.use(join);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(port, () => { console.log(`Listening on port ${port}...`) });

module.exports = app;
