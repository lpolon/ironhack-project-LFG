const express = require('express');
const indexRouter = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

indexRouter.use('/user', require('./user'));
indexRouter.use('/signup', require('./signup'));
indexRouter.use('/login', require('./login'));
indexRouter.use('/logout', require('./logout'));
indexRouter.use('/profile', require('./profile'));
indexRouter.use('/games', require('./games'));

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('index', { title: 'LFG | find game pals' });
});

module.exports = indexRouter;
