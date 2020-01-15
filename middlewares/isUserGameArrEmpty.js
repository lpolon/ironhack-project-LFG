const isUserGameArrEmpty = async (req, res, next) => {
  const User = require('../models/Users');
  try {
    console.log(req.user)
    const { games } = await User.findById(req.user._id);
    if (games.length === 0) {
      req.noGamesFlag = {
        status: true,
        statusMsg: 'you did not add any games yet. Please, choose below:',
      };
      next();
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = isUserGameArrEmpty;