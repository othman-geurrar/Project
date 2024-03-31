const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updated_at:{ 
        type: Date, 
        default: Date.now 
    }
});

Product = mongoose.model('Products', productSchema)

module.exports = Product;