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
    const queryResultArr = findAllGamePrefs.filter(
      (obj) => obj.userId.username !== username
    );
    const ownUserName = req.user.username
    const destructuredQueryResultArr = queryResultArr.map((obj) => {
      const {
        commitment,
        gameId: { name, platforms, img_url },
        userId: { username, contactChannels },
        schedule,
        moreInfo,
      } = obj;
      return {
        commitment,
        name,
        platforms,
        img_url,
        username,
        contactChannels,
        schedule,
        moreInfo,
      };
    });
    const resObj = {ownUserName, destructuredQueryResultArr}
    res.render('user-lfg.hbs', resObj);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

module.exports = userLfgRouter;