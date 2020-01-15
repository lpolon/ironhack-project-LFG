var express = require('express');
var userRouter = express.Router({mergeParams: true});

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  console.log('olá, /:username')
  console.log(req.user)
  res.render('user', req.user);
});

module.exports = userRouter;