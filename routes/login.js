const express = require('express');
const loginRouter = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const {loginStrat} = require('../middlewares/passport');


loginRouter.get('/', (req, res) => {
  res.render('login');
});
loginRouter.post('/', ensureLoggedOut(), loginStrat);


module.exports = loginRouter;