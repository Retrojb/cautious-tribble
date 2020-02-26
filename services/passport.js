const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Can be used for all strategies
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then( user => {
            done(null, user);
        });
});

// Generic register, makes passport aware of strategy to use
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: keys.googleCallbackURL,
        proxy: true
    }, (accessToken, refreshToken, profile, done) => { 
        User.findOne({ googleID: profile.id })
            .then((existingUser) => {
                if(existingUser) {
                    console.log('User Exists')
                    done(null, existingUser);
                }
                else {
                    console.log('creating new user')
                    new User({
                        googleID: profile.id,
                        name: profile.displayName
                    })
                    .save()
                    .then( user => done(null, user));
                }
            })
    })
);