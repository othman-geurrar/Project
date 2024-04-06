const passport = require('passport')

const userAuth = (req,res,next) =>{
    passport.authenticate('local', (err, user) => {
        if(err){
            return next(err);
        }
        if(!user){
            return res.status(401).json({
                message: 'Invalid username or password'
            })
        }
        req.logIn(user, (err) => {
            if(err){
                return next(err);
            }else {
                return res.status(200).json({
                    message: `welcom ${user.UserName}`
                })
            }
    
        })

    })(req,res,next);
  
}

module.exports = userAuth;