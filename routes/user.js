const express = require('express');
const userRouter = express.Router();
const myGamesRouter = require('./username-games');
const userLfgRouter = require('./user-lfg');

userRouter.use('/games', myGamesRouter);
userRouter.use('/lfg', userLfgRouter);


userRouter.get('/', (req, res, next) => {
  res.render('user.hbs', req.user);
});

module.exports = userRouter;
