const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts)
    app.post('/api/product', ProductController.createOneProduct)
    app.get('/api/product/:id', ProductController.findProduct)
    app.patch('/api/product/:id', ProductController.updateProduct)
    app.delete('/api/product/:id', ProductController.deleteProduct)
}