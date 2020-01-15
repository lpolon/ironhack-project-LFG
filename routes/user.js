

const express = require('express');
const userRouter = express.Router();
const myGamesRouter = require('./username-games');

userRouter.use('/games', myGamesRouter);

userRouter.get('/', (req, res, next) => {
  res.render('user.hbs', req.user);
});

module.exports = userRouter;