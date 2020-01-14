var express = require('express');
var indexRouter = express.Router();

indexRouter.use('/user', require('./user'));
indexRouter.use('/signup', require('./signup'))
indexRouter.use('/login', require('./login'))
indexRouter.use('/logout', require('./logout'))
indexRouter.use('/profile', require('./profile'))

/* GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = indexRouter;
