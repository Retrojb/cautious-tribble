const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// Generic register, makes passport aware of strategy to use
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => { 
        User.findOne({ googleID: profile.id })
            .then((existingUser) => {
                if(existingUser) {
                    console.log('User Exists')
                }
                else {
                    console.log('creating new user')
                    new User({
                        googleID: profile.id,
                        name: profile.displayName
                    }).save()
                }
            } )
        
    })
);