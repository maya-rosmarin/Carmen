var createError = require('http-errors');
var express = require('express');
// var Models = require('./src/models/index.js');
// var models = Models.models;
// var models_sequelize = Models.models_sequelize;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

require('dotenv').config();
const PORT = process.env.PORT || '3005';
var flash = require('connect-flash');
var passport = require('passport');
var request = require('request');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

// models_sequelize.sync();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require(‘body-parser’).urlencoded({ extended: true }));
const expressSession = require(‘express-session’);
app.use(expressSession({secret: ‘mySecretKey’}));
app.use(passport.initialize());
app.use(passport.session());
app.use(‘/public’, express.static(__dirname + ‘/public’));
app.use(flash());
app.use(session({secret: ‘keyboard cat’}))
app.use(bodyParser());
app.set(‘view engine’, ‘pug’);
app.set(‘view options’, { layout: false });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/', function (req, res) {res.render('index')});
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

module.exports = app;
require(‘./routes.js’)(app);
