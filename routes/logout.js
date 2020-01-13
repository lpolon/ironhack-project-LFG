const express = require('express');
const router = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/', ensureLoggedIn('/login'), (req, res) => {
  req.logout();
  res.redirect('/login');
});


module.exports = router;