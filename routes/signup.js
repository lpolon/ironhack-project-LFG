const express = require('express');
const signupRouter = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const { signupStrat } = require('../middlewares/passport');
signupRouter.get('/', (req, res) => {
  res.render('signup.hbs');
});

signupRouter.post('/', ensureLoggedOut(), signupStrat);

module.exports = signupRouter;
