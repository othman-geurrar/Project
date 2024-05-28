const mongoose = require("mongoose"); 
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  productId: {
    type: Number,
    ref: 'Product',
    required: true
  },
  name:{
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    min: 1
  },
  color: {
    type: String,
    
  },
  newPrice: {
    type: Number,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const cartSchema = new Schema({
  userId: {
    type: Number,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;