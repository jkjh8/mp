var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport')
// var history = require('connect-history-api-fallback'); 
var cors = require('cors');
var logger = require('morgan');

const mongoose = require('mongoose')
const MongoStore = require("connect-mongo")(session)
const User = require('./models/User.js')

mongoose.connect('mongodb://localhost:27017/MediaServer', { useUnifiedTopology:true, useNewUrlParser: true }, (err) => {
  if (err) return console.error(err)
  console.log('mongoose connect!')
})

require('./passport').config(passport);
require('dotenv').config();

var app = express();
// app.use(history());
app.use(cors({ origin: true, credentials: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 60*60*24 })
  }
}))
app.use(passport.initialize());
app.use(passport.session())
app.use('/', require('./routes/index'));
app.use('/api/loginProcess', require('./routes/loginProcess'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send(createError(404));
});

module.exports = app;
// User.create({ id: 'admin', name: 'administrator', password: 'password'})
