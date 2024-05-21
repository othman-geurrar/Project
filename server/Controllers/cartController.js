const mongoose = require('mongoose');
const Cart = require('../Models/cart'); // Ensure you have the correct path to your Cart model



async function getCartByUserId(req, res) {
    const { userId } = req.params;
  
    try {
      const cart = await Cart.findOne({ userId: mongoose.Types.ObjectId(userId) });
  
      if (cart) {
        res.status(200).send(cart);
      } else {
        res.status(404).send({ message: 'Cart not found for this user' });
      }
    } catch (error) {
      console.error('Error retrieving cart:', error);
      res.status(500).send({ error: 'Failed to retrieve cart' });
    }
  }
  


async function addItemToCart(req, res) {
  const { userId, productId, quantity } = req.body;

  try {
    

    let cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.productId === productId);
      if (itemIndex > -1) {
        // Item already exists in the cart, update the quantity
        cart.items[itemIndex].quantity += quantity;
        console.log('Updated quantity')
      } else {
        // Item does not exist in the cart, add as new item
        cart.items.push({ productId, quantity });
        console.log('Added new item')
      }
    } else {
      // No cart for this user, create a new one
      cart = new Cart({
        userId: userId,
        items: [{ productId, quantity }]
      });
      console.log('Created new cart')
    }

    await cart.save();
    res.status(200).send({ message: 'Item added to cart successfully' , "cart" : cart });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).send({ error: 'Failed to add item to cart' });
  }
}


async function removeItemFromCart(req, res) {
    const { userId, productId } = req.body;
  
    try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
        return res.status(404).send({ error: 'Cart not found for this user' });
      }
  
       // Find the index of the item to remove
    const itemIndex = cart.items.findIndex(item => item.productId === productId);

    if (itemIndex === -1) {
      return res.status(404).send({ error: 'Item not found in the cart' });
    }

    // Remove the item from the cart
    cart.items.splice(itemIndex, 1);

    // Save the updated cart
    await cart.save();
  
    res.status(200).send({ message: 'Item removed from cart successfully' });
      
    } catch (error) {
      console.error('Error removing item from cart:', error);
      res.status(500).send({ error: 'Failed to remove item from cart' });
    }
}

module.exports = {addItemToCart , removeItemFromCart , getCartByUserId};
