const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// Models before services
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Passport to use cookies
app.use(
    cookieSession({
        mackAge: 2592000000,
        keys: [ keys.cookieKey ]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/auth-routes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);