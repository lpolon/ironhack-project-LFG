const express = require('express');
const myGamesRouter = express.Router();
const Users = require('../models/Users');
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty');
const GamePrefs = require('../models/gamePrefs');
const Games = require('../models/Games');

myGamesRouter.get('/', isUserGameArrEmpty, async (req, res, next) => {
  try {
    const { status } = req.noGamesFlag;
    if (status) {
      res.redirect('/find-games');
    }
    const { games } = await Users.findById(req.user._id).populate('games');
    const { username } = req.user;
    const resObj = { games, username };
    res.render('user-games.hbs', { resObj });
  } catch (error) {
    next(error);
  }
});

myGamesRouter.param('gameId', (req, res, next, gameIdParam) => {
  req.gameId = gameIdParam;
  next();
});

myGamesRouter.get('/:gameId/add', async (req, res, next) => {
  // get game;
  const { name, img_url, platforms } = await Games.findById(req.gameId);
  const { username } = req.user;

  const resObj = { name, img_url, platforms, username };
// query gamePrefs. Necessario para put
  // const { _id: userId } = req.user;
  // // lala
  // // TODO: voltar nisso quando tiver collection game prefs
  // const gamePrefs = await GamePrefs.find({ gameId: req.gameId, userId });
  // console.log('gameprefs: ', gamePrefs);
  res.render('user-game-edit-form.hbs', resObj);
});

// precisa cair nessa rota quando estiver adicionando pela primeira vez
myGamesRouter.post('/:gameId/add', async (req, res) => {
  try {
    const gameId = req.gameId;
    const { _id: userId } = req.user;
    const { schedule, commitment, moreInfo } = req.body;
    const newGamePref = new GamePrefs({
      gameId,
      userId,
      schedule,
      commitment,
      moreInfo,
    });
    try {
      await newGamePref.save();
    } catch (error) {
      console.log(error);
    }
    const gamePrefs = await GamePrefs.find({ gameId, userId });
    console.log('gameprefsOfUser: ', gamePrefs);
    res.redirect('../');
  } catch (error) {
    next(error);
  }
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
