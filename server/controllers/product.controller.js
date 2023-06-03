const Product = require('../models/product.model') // import Product model

module.exports = {
    findAllProducts : (req, res) => {
        Product.find()
            .then(allProducts => {
                res.json({ products: allProducts })
            })
            .catch(err => {
                res.json({ message: 'Something went wrong.', error: err})
            })
    },

    createOneProduct : (req,res) => {
        Product.create(req.body)
            .then( newProduct => {
                res.json({ product: newProduct})
            })
            .catch(err => {
                res.json({message: "Something went wrong.", error: err})
            })
    }
    
}