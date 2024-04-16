const isUserAuthenticated = (req, res, next) => {
  if (req.user?.role == "User") {
    console.log( "middl " ,req.user.role)
      return next();
  } else {
      return res.status(401).send('You are not authenticated');
  }
};


module.exports = isUserAuthenticated;


