const gamesRouter = require('express').Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Games = require('../models/Games');
const Users = require('../models/Users');
const listAllAsync = require('../models/functions/listAllAsync')
const isUserGameArrEmpty = require('../middlewares/isUserGameArrEmpty')

gamesRouter.get('/', 
ensureLoggedIn(),
isUserGameArrEmpty,
 async (req, res, next) => {
    const resObj = await listAllAsync(Games);
    const { status, statusMsg } = req.noGamesFlag;
    if(status) {
      resObj.status = status;
      resObj.statusMsg = statusMsg;
    }
    res.render('games', { resObj });
});

// push game Id to User,
// redirect to /:username/games
gamesRouter.get('/:_id/add', async (req, res, next) => {
  try {
    const gameId = req.params._id;
    userId = req.user._id;
    const {id, name, platforms, img_url} = await Games.findById(gameId);
    const update = await Users.findByIdAndUpdate(userId, {$push: {games: gameId}})
    console.log('apareceu o jogo?', update);
    const userAfterUpdate = await Users.findById(userId);
    console.log('userId: ', userAfterUpdate);
    res.redirect(`/${req.user.username}/games`);
  } catch (error) {
    next(error)
  }
})


module.exports = gamesRouter;

// rota para pegar o id e buscar o jogo no banco de dados
// .get(/:_id) 