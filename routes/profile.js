const express = require('express');
const profileRouter = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const passport = require('passport')

profileRouter.get('/', ensureLoggedIn(), function(req, res, next) {
  res.render('perfil');
});

module.exports = profileRouter;