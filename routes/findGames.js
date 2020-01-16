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
    const {username} = req.user;
    resObj.username = username;
    res.render('games.hbs', { resObj });
});

// push game Id to User,
// redirect to /:username/games
gamesRouter.get('/:_id/add', async (req, res, next) => {
  // TODO: Essa lógica precisa ser passada para a nova rota
  try {
    const gameId = req.params._id;
    const userId = req.user._id;
    await Users.findByIdAndUpdate(userId, {$push: {games: gameId}})
    res.redirect(`/${req.user.username}/games`);
  } catch (error) {
    next(error)
  }
})


module.exports = gamesRouter;

// rota para pegar o id e buscar o jogo no banco de dados
// .get(/:_id) 