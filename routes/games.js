const gamesRouter = require('express').Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Games = require('../models/Games');
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

module.exports = gamesRouter;