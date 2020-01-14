const express = require('express');
const signupRouter = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')


signupRouter.get('/', (req, res) => {
  res.render('signup');
});

signupRouter.post('/', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/login',
  failureRedirect : '/signup',
  failureFlash : true,
  passReqToCallback : true,
}));


module.exports = signupRouter;
