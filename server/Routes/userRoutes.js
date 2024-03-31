const userRouter = require("express").Router();

const {login,register,registerUserValidationRules,loginUserValidationRules, getUsers, updateUser, deleteUser} = require('../Controllers/userController')

userRouter.post('/register',registerUserValidationRules,register)
userRouter.post("/login",loginUserValidationRules,login)
userRouter.get('/getUsers', getUsers)
userRouter.put('/update/:userName', updateUser)
userRouter.delete('/delete/:UserName', deleteUser)

module.exports= userRouter;
