userLfgRouter = require('express').Router();
const GamePrefs = require('../models/gamePrefs');
const User = require('../models/Users');

userLfgRouter.use('/', async (req, res, next) => {
  const { _id: userId, username } = req.user;
  try {
    const { games } = await User.findById(userId);
    const findAllGamePrefs = await GamePrefs.find({ gameId: { $in: games } })
      .sort({ updatedAt: 'desc' })
      .populate(['gameId', 'userId']);
    const queryResult = findAllGamePrefs.filter(
      (obj) => obj.userId.username !== username
      );
      // console.log(queryResult);
      res.render('user-lfg.hbs')
  } catch (error) {
    next(error)
    console.log(error);
  }
});
/*
  res.render('user-game-edit-form.hbs', {
    username,
    schedule,
    moreInfo,
    commitment,
    img_url,
    name,
    userId,
  });
*/

module.exports = userLfgRouter;
