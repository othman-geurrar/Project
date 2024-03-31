const express = require('express')
const productRouter = express.Router()
const {getProduct, addProduct, updateProduct, deleteProduct} = require('../Controllers/productController')




productRouter.get('/', getProduct)
.post('/newer', addProduct)
.put('/:id', updateProduct)
.delete('/:id', deleteProduct)






module.exports = productRouter;