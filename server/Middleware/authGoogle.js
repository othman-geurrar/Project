// require("../Strategy/google")
// const passport = require("passport")

// const googleAuth = (req,res,next)=>{
//     passport.authenticate('google',{scope:["email" , "profile"]})
// }

// module.exports = googleAuth;


// const isLoggedin = (req, res, next)=>{
//     req.user ? next() : res.sendStatus(401);
//     // req.authenticated ? next() : res.sendStatus(401);
// };



// module.exports = isLoggedin;


const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).send('Unauthorized');
    }
};

module.exports = isAuthenticated;