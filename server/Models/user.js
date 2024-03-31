const mongoose = require('mongoose');


 const userSchema = new mongoose.Schema({
    userName : { type: String,require:true,unique:true },
    email:{ type:String, required:true,unique:true},
    password: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }

  });

const userModel = mongoose.model('users', userSchema);
  

module.exports= userModel;