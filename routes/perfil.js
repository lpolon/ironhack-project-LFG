const express = require('express');
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')

router.get('/', ensureLoggedIn(), function(req, res, next) {
  res.render('perfil');
});

module.exports = router;