
const isAdminAuthenticated = (req, res,next) => {
    if ( req.user?.role == "Admin") {
      console.log( "middl " ,req.user.role)
        return next();
    } else if ( req.user?.role == "User" ) {
      return res.status(401).send('You are not authorized !');
    }
    else {
        return res.status(401).send('You are not authenticated');
    }
  }

  module.exports = isAdminAuthenticated;