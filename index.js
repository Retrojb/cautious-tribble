const express = require('express');
require('./services/passport')


const app = express();

require('./routes/auth-routes')(app); // valid yuck
//wrap the route as a function, import
// if require() returns a function, immediatly invokes the function that was just called with the arguemne 

const PORT = process.env.PORT || 5000;

app.listen(PORT);