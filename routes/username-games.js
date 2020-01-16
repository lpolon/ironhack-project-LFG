const express = require('express');
const myGamesRouter = express.Router();
const Users = require('../models/Users');
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty');
// const GamePrefs = require('../models/gamePrefs');
const Games = require('../models/Games');

myGamesRouter.get('/', isUserGameArrEmpty, async (req, res, next) => {
  console.log('oi, rota');
  const { status } = req.noGamesFlag;
  if (status) {
    res.redirect('/find-games');
  }
  // TODO: populate está retornando vazio.
  console.log('req.user._id ok?', req.user._id);
  const { games } = await Users.findById(req.user._id).populate('games');
  console.log('games returned with populate', games);
  const { username } = req.user;
  const resObj = { games, username };
  res.render('user-games.hbs', { resObj });
});

myGamesRouter.param('gameId', (req, res, next, gameIdParam) => {
  req.gameId = gameIdParam;
  next();
});

myGamesRouter.get('/:gameId/edit', async (req, res, next) => {
  // get game info.
  // show game info, but not edit it.
  const game = await Games.findById(req.gameId);
  const { name, platforms, img_url } = game;
  // game prefs do usuario para um jogo especifica
  const { _id: userId } = req.user;
  console.log('userId: ', userId);
  console.log('req.user: ', req.user);
  console.log('req.gameId: ', req.gameId);
  console.log('req.gameId2:');
  // TODO: voltar nisso quando tiver collection game prefs
  const gamePrefs = await GamePrefs.find({ gameId: req.gameId, userId });
  console.log('gameprefs: ', gamePrefs);
  // vai mesmo ter uma game pref por jogo?
  // como eu consulto?

  // get gameSchedule,
  // get more info
  // res.render('user-game-edit-form.hbs', { oi: 'oi' });
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
  });
  await newGamePref.save();
});

// buscar prefs por jogo
/*
GamePrefs.find({userId: userId})
buscar todas as prefs de um usuário e popular os jogos gameId.
retornar
*/
//

module.exports = myGamesRouter;
