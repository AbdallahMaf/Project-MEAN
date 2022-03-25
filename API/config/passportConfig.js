const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.use(
    new localStrategy({ usernameField: 'email' },
    (username, passport, done) => {
        User.findOne({ email: username },
            (err, user) => {
                if(err)
                    return done(err);
                //unknow user
                else if(!user)    
                    return done(null, false, { message: 'Email is not registered' });
                //wrong password
                else if(!user.verifyPassword(password))
                    return done(null, false, { message: 'Wrong password.' });
                // authentification succeeded
                else
                    return done(null, user);
            });

    })
);
