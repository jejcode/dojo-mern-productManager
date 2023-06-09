const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts)
    app.post('/api/products', ProductController.createOneProduct)
    app.get('/api/products/:id', ProductController.findProduct)
    app.patch('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}