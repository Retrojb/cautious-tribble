const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
// Models before services
require('./models/User');
require('./models/House');
// const room = mongoose.model('./models/Room');
require('./services/passport')
mongoose.connect(keys.mongoURI);

const app = express();

// MIDDLEWARE

app.use(bodyParser.json())
  // Passport to use cookies
app.use(
    cookieSession({
        mackAge: 2592000000,
        keys: [ keys.cookieKey ]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);
require('./routes/houseRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);