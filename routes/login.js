const express = require('express');
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')


router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : '/perfil',
  failureRedirect : '/login',
  failureFlash : true,
  passReqToCallback : true,
}));


module.exports = router;
