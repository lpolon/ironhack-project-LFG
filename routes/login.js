const express = require('express');
const loginRouter = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')


loginRouter.get('/', (req, res) => {
  res.render('login');
});

loginRouter.post('/', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : '/perfil',
  failureRedirect : '/login',
  failureFlash : true,
  passReqToCallback : true,
}));


module.exports = loginRouter;