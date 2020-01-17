const express = require('express');
const indexRouter = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

indexRouter.use('/signup', require('./signup'));
indexRouter.use('/login', require('./login'));
indexRouter.use('/logout', require('./logout'));
indexRouter.use('/find-games', require('./findGames'));

const ensureRightUser = require('../middlewares/ensureRightUser');

indexRouter.use(
  '/:username',
  ensureLoggedIn(),
  ensureRightUser,
  require('./user')
);
/* GET home page. */

indexRouter.get('/', (req, res, next) => {
  console.log(typeof req.user);
  if (typeof req.user === 'undefined') {
    res.render('index.hbs', { title: 'LFG | find game pals' });
    return
  }
  res.redirect(`/${req.user.username}`)
});

module.exports = indexRouter;
