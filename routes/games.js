const gamesRouter = require('express').Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Games = require('../models/Games');


gamesRouter.get('/', 
// ensureLoggedIn(),
 async (req, res, next) => {
  try {
    const findRes = await Games.find().sort({id:'desc'});
    res.render('games', { findRes });
  } catch (error) {
    next(error);
  }
});

module.exports = gamesRouter;
