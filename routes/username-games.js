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
      await newGamePref.save();
      await Users.findByIdAndUpdate(userId, { $push: { games: gameId } });
    } catch (error) {
      console.log(error);
    }
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
  const {
    schedule,
    moreInfo,
    commitment,
    gameId: { img_url, name },
  } = gamePrefs;
  res.render('user-game-edit-form.hbs', {
    username,
    schedule,
    moreInfo,
    commitment,
    img_url,
    name,
    userId,
  });
});

myGamesRouter.post('/:gamePrefId/edit', async (req, res, next) => {
  const { schedule, commitment, moreInfo } = req.body;
  await GamePrefs.findByIdAndUpdate(req.gamePrefId, {
    schedule,
    commitment,
    moreInfo,
  });
  res.redirect(`/${req.user.username}/games`);
});

myGamesRouter.get('/:gamePrefId/delete', async (req, res, next) => {
  await GamePrefs.findByIdAndDelete(req.gamePrefId);
  res.redirect(`/${req.user.username}/games`);
});

module.exports = myGamesRouter;
