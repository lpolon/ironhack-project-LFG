const express = require('express');
const myGamesRouter = express.Router();
const Users = require('../models/Users');
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty');
const GamePrefs = require('../models/gamePrefs');
const Games = require('../models/Games');

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

myGamesRouter.param('gameId', (req, res, next, gameIdParam) => {
  req.gameId = gameIdParam;
  next();
});

myGamesRouter.get('/:gameId/edit', async (req, res, next) => {
  // get game info.
  // show game info, but not edit it.
  // game prefs do usuario para um jogo especifica
  const { _id: userId } = req.user;
  // TODO: voltar nisso quando tiver collection game prefs
  const gamePrefs = await GamePrefs.find({ gameId: req.gameId, userId });
  console.log('gameprefs: ', gamePrefs);
  res.render('user-game-edit-form.hbs', { oi: 'oi' });
});

// precisa cair nessa rota quando estiver adicionando pela primeira vez
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

// criar uma rota de .put quando 

// colocar um IF na view para carregar o botao e rotas diferentes

// buscar prefs por jogo
/*
GamePrefs.find({userId: userId})
buscar todas as prefs de um usuário e popular os jogos gameId.
retornar
*/
//

module.exports = myGamesRouter;
