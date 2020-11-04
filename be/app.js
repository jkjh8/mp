var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var logger = require('morgan');
var passport = require('passport')
// var history = require('connect-history-api-fallback'); 
var cors = require('cors');

const mongoose = require('mongoose')
const MongoStore = require("connect-mongo")(session)
const User = require('./models/User.js')

mongoose.connect('mongodb://localhost:27017/MediaServer', (err) => {
  if (err) return console.error(err)
  console.log('mongoose connect!')
})

require('./passport').config(passport);
require('dotenv').config();

var app = express();
// app.use(history());
app.use(cors({
  origin: true,
  credentials: true
}));

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

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

// User.create({ id: 'admin', name: 'administrator', password: 'password'})
