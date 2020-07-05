var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const methodOverride = require('method-override')
require('./config/database')
require('./config/passport')
require('dotenv').config()
require('./routes/posters')
const session = require('express-session')
const passport = require('passport')



var indexRouter = require('./routes/index');
var postersRouter = require('./routes/posters');
var ratingsRouter =require('./routes/ratings')
const apiRouter = require('./routes/api');
const multer = require('multer');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Allow others to communicate with api
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static('./uploads'))
app.use(methodOverride('_method'))

app.use(
  session({
    secret: 'SEIRocks!',
    resave: false,
    saveUninitialized: true,
  })
);

//Mount and initiate passport
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/posters', postersRouter);
app.use('/', ratingsRouter)
app.use('/api', apiRouter)

var upload = multer({dest: 'uploads/'})

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
