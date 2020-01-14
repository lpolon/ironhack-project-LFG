var express = require('express');
var userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = userRouter;
