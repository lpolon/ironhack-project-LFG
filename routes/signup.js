const express = require('express');
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')


router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/login',
  failureRedirect : '/signup',
  failureFlash : true,
  passReqToCallback : true,
}));


module.exports = router;
