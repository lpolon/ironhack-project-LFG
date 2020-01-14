const express = require('express');
const logoutRouter = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

logoutRouter.get('/', ensureLoggedIn('/login'), (req, res) => {
  req.logout();
  res.redirect('/login');
});


module.exports = logoutRouter;