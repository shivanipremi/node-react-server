const config = require('../config/keys')
const passport = require('passport');
const mongoose = require('mongoose');
const googlestrategy = require('passport-google-oauth20').Strategy;
const User = mongoose.model('users');


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function (user, done) {
    // let user = await User.findOne({ _id: user.id })
    done(null, user);
});                  



passport.use(new googlestrategy({
    clientID : config.googleClientID,
    clientSecret : config.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, async function (accesstoken, refreshtoken, profile, done) {
    let data = await User.findOne({googleId : profile.id});
    console.log('ata====', data)
    if(data) {
        done(null, data);
    } else {
        let user = await new User ({googleId : profile.id, name : profile.displayName}).save();
        console.log('user here------', user);
        done(null, user)
    }

}));