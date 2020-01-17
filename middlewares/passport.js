const passport = require('passport');

const signupStrat = passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/signup',
  passReqToCallback: true,
});

const loginStrat = passport.authenticate('local-login', {
  // middleware after /login post
  successRedirect: '/',
  failureRedirect: '/login',
  passReqToCallback: true,
});

module.exports = {
  signupStrat,
  loginStrat,
};