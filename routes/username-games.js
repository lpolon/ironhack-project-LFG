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
  res.render('user-game-add-form.hbs', resObj);
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
    // TODO: conferir todas as rotas relativas nos views e rotas
    res.redirect(`/${req.user.username}/games`);
  } catch (error) {
    next(error);
  }
});

myGamesRouter.param('gamePrefId', (req, res, next, gamePrefIdParam) => {
  req.gamePrefId = gamePrefIdParam;
  next();
});

myGamesRouter.get('/:gamePrefId/edit', async (req, res, next) => {
  const { _id: userId } = req.user;
  const gamePrefs = await GamePrefs.findById(req.gamePrefId).populate('gameId');
  const { username } = req.user;
  resObj = { username, gamePrefs };
  console.log('my res Obj:', resObj);
  console.log('my game prefs: ', gamePrefs);
  res.render('user-game-edit-form.hbs', resObj);
  // devolver form com infos e botoes arrumados
});

myGamesRouter.post('/:gamePrefId/edit', async (req, res, next) => {
  const { schedule, commitment, moreInfo } = req.body;
  await GamePrefs.findByIdAndUpdate(req.gamePrefId,
    {
    schedule,
    commitment,
    moreInfo,
  }
  );
  res.redirect(`/${req.user.username}/games`);
});

myGamesRouter.get('/:gamePrefId/delete', async (req, res, next) => {
  await GamePrefs.findByIdAndDelete(req.gamePrefId);
  res.redirect(`/${req.user.username}/games`);
});

/*
GamePrefs.find({userId: userId})
buscar todas as prefs de um usuário e popular os jogos gameId.
retornar
*/
//

module.exports = myGamesRouter;