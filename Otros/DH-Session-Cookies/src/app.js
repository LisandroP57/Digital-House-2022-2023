const createError = require('http-errors');
const express = require('express');
const path = require('path');
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieCheck = require('./middleware/cookieCheck');

const app = express();

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"));
app.use(session({
  secret: "mensaje",
  resave:false,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(cookieCheck);

app.use('/', indexRouter);


    /* Error 404 */
app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;