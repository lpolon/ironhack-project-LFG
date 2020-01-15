const express = require('express');
const myGamesRouter = express.Router();
const Users = require('../models/Users');
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty');

myGamesRouter.get('/', isUserGameArrEmpty, async (req, res, next) => {
  const { status } = req.noGamesFlag;
  if (status) {
    res.redirect('/find-games');
  }
  const { games } = await Users.findById(req.user._id).populate('games');
  const { username } = req.user;
  const resObj = { games, username };
  res.render('user-games.hbs', { resObj });
});

module.exports = myGamesRouter;
