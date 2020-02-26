const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); // make sure ti declare the model before the service... Thanks javascript
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
//wrap the route as a function, import
// if require() returns a function, immediatly invokes the function that was just called with the arguemne 

const PORT = process.env.PORT || 5000;

app.listen(PORT);