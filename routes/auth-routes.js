const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    //send the code id and turns it to the actual user profile
    app.get('/auth/google/callback', passport.authenticate('google'))
}