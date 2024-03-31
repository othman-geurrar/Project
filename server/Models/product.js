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
    // subcategory:[{
    //     type:String,
    //     model:[{
    //         type:String,
    //         colour:[{
    //             name:String,
    //             image:String
    //         }],
    //         size:[{
    //             val:Number,
    //             price:Number
    //         }]
    //     }]
    // }],
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

productModel = mongoose.model('product', productSchema)

module.exports = productModel;