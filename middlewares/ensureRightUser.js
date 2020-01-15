const ensureRightUser = (req, res, next) => {
  try {
    const usernameString = String(req.user.username)
    const usernameOnParamsString = String(req.params.username);
    if (usernameString === usernameOnParamsString) {
      next();
    } else {
      res.redirect('/login')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = ensureRightUser;