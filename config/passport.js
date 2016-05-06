var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User          = require('../models/user');


module.exports = function(passport) {
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
//test
passport.use('local-signup', new LocalStrategy(
  {passReqToCallback: true},
  function(req, username, password, done) {
    process.nextTick(function(){

    User.findOne({username: username}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        console.log('user exists');
        return done(null, false);
      } else {
        var newUser     = new User();
        newUser.username = username;
        newUser.password = newUser.encrypt(password);
        newUser.email = req.body.email;
        newUser.bio = req.body.bio;
        newUser.role = req.body.role;

        newUser.save(function(err) {
          if (err) throw err;
          return done(null, newUser);
        });
      }
    });
  });
}));

passport.use('local-login', new LocalStrategy(
  function(username, password, done) {

    User.findOne({username: username}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log('user does not exist');
        return done(null, false);
      }
      if (!user.validatePassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  }));

}
