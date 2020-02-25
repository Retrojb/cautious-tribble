const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // make sure ti declare the model before the service... Thanks javascript
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/auth-routes')(app); // valid yuck
//wrap the route as a function, import
// if require() returns a function, immediatly invokes the function that was just called with the arguemne 

const PORT = process.env.PORT || 5000;

app.listen(PORT);