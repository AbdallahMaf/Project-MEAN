const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.use(
    new localStrategy({ usernameField: 'email' },
    (username, password, done) => {
        User.findOne({ email: username },
            (err, user) => {
                if(err)
                    return done(err);
                //unknow user
                else if(!user)    
                    return done(null, false, { message: 'L\'Email n\'est pas enregistré' });
                //wrong password
                else if(!user.verifyPassword(password))
                    return done(null, false, { message: 'Mot de Passe incorrect.' });
                // authentification succeeded
                else
                    return done(null, user);
            });

    })
);
