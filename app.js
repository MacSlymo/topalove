const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

const index = require('./routes/index');
const auth = require('./routes/auth');
const versus = require('./routes/versus');
const categories = require('./routes/categories');
const profile = require('./routes/profile');
const error = require('./routes/error');
const choice = require('./routes/choice');

const User = require('./models/users');

mongoose.connect("mongodb://localhost/topalove")
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: "this-secret-is-so-secret-dude-!",
  resave: false,
  saveUninitialized: true
}));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById( id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(flash());

passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, email, password, next) => {

    User.findOne({
      'email': email
    }, (err, user) => {
      if (err){ return next(err); }

      if (user) {
        return next(null, false);
      } else {
        // Destructure the body
        const { name, email, password } = req.body;
        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        const newUser = new User({
          name,
          email,
          password: hashPass
        });

        newUser.save((err) => {
          if (err){ next(err); }
          return next(null, newUser);
        });
      }
    });
  }));

passport.use("local-login", new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  (req, emailInput, password, next) => {
    User.findOne({ email: emailInput }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { message: "Incorrect email" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }
      return next(null, user);
    });
}));


app.use(passport.initialize());
app.use(passport.session());

// Our middlewares
app.use((req, res, next) => {
  req.app.locals.styles = [];
  next();
});

app.use('/', index);
app.use('/', auth);
app.use('/', versus);
app.use('/', categories);
app.use('/', profile);
app.use('/', error);
app.use('/', choice);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
