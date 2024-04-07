const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
      return next();
  } else {
      return res.status(401).send('You are not authenticated');
  }
};

module.exports = isAuthenticated;
