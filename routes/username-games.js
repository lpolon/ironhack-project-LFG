const express = require('express');
const myGamesRouter = express.Router();

const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty')
// escrever uma função que pega todos os jogos do usuário. Se estiver vazio, convidar para adicionar jogos.

myGamesRouter.get('/', isUserGameArrEmpty, (req, res, next) => {
  const { status } = req.noGamesFlag;
  if (status) {
    res.redirect('/games');
  }
  console.log('status:', status);
  console.log('req.noGamesFlag:', req.noGamesFlag);
  res.send(`oi, ${req.user.username}`);
});

module.exports = myGamesRouter;