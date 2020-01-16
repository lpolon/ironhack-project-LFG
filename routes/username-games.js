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
    const { _id: userId } = req.user;

    const gamePrefs = await GamePrefs.find({ userId }).populate('gameId');
    //  .sort({createdAt: 'desc'})
    const { username } = req.user;
    const resObj = { gamePrefs, username };
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
  const { name, img_url, platforms } = await Games.findById(req.gameId);
  const { username } = req.user;

  const resObj = { name, img_url, platforms, username };
  // query gamePrefs. Necessario para put
  // const { _id: userId } = req.user;
  // const gamePrefs = await GamePrefs.find({ gameId: req.gameId, userId });
  res.render('user-game-edit-form.hbs', resObj);
});

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
      // TODO: new Id to view
      await newGamePref.save();
      await Users.findByIdAndUpdate(userId, { $push: { games: gameId } });
    } catch (error) {
      console.log(error);
    }
    res.redirect('../');
  } catch (error) {
    next(error);
  }
});

// TODO: conferir
myGamesRouter.param('gamePrefId', (req, res, next, gamePrefIdParam) => {
  req.gamePrefId = gamePrefIdParam;
  next();
});

myGamesRouter.get('/:gamePrefId/edit', (req, res, next) => {
  // devolver form com infos e botoes arrumados
});

myGamesRouter.post('/:gamePrefId/edit', (req, res, next) => {
  // atualizar inputados
});

myGamesRouter.get('/:gamePrefId/delete', async (req, res, next) => {
  console.log('oi, rota')
  console.log('id ok?', req.gamePrefId)
  const deletedItem = await GamePrefs.findByIdAndDelete(req.gamePrefId);
  console.log('deleted!', deletedItem)
  res.redirect(`/${req.user.username}/games`);
  // check if still in my games and return
});

// fazer delete e put

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
