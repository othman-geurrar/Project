const islogging = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).send("Your are not logging");
  }
};
module.exports = islogging;
