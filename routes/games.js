const gamesRouter = require('express').Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Games = require('../models/Games');

// console.log(Games);

gamesRouter.get('/', 
// ensureLoggedIn(),
 async (req, res, next) => {
  try {
    const findRes = await Games.find().sort({id:'desc'});
    console.log(findRes);
    res.render('games', { findRes });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = gamesRouter;
