const passport = require('passport');

const signupStrat = passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/signup',
  passReqToCallback: true,
});

const loginStrat = passport.authenticate('local-login', {
  // TODO: ENVIAR O USUÁRIO PARA /:username 
  // mudar para /:username/
  successRedirect: '/',
  failureRedirect: '/login',
  passReqToCallback: true,
});

module.exports = {
  signupStrat,
  loginStrat,
};