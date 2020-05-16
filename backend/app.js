require('dotenv').config();

// backEnd dependencies
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// passport dependencies
const cors = require('cors');
const passport = require('./config/passport');
const session = require('express-session');

// Mongoose connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to Mongo', err));

// express set up
const app = express();
// cors config
app.use(
  cors({
    origin: [process.env.FRONTEND_ENDPOINT],
    credentials: true,
  })
);
// express session config
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize())
app.use(passport.session())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// auth routes
app.use('/', require('./routes/auth'))

module.exports = app