const express = require('express');
const myGamesRouter = express.Router();
const Users = require('../models/Users');
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty');

const GamePrefs = require('../models/gamePrefs');

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

myGamesRouter.get('/:gameId/edit', (req, res, next) => {
  // get game info.

  // show game info, but not edit it.

  // get gameSchedule,
  // get more info
  res.render('user-game-edit-form.hbs', { oi: 'oi' });
});

myGamesRouter.post('/:gameId/edit', async (req, res) => {
  const { gameId } = req.params;
  // descontruir id do users req.user
  // descontruir req.body
  const newGamePref = new GamePrefs({
    gameId,
    userId,
    moreInfo,
    schedule,
    mode,
  })
  await newGamePref.save()
});

// buscar prefs por jogo
/*
GamePrefs.find({userId: userId})
buscar todas as prefs de um usuário e popular os jogos gameId.
retornar
*/
//

module.exports = myGamesRouter;
