const Product = require('../models/product.model') // import Product model

module.exports = {
    findAllProducts : (req, res) => {
        Product.find()
            .then(allProducts => {
                res.json(allProducts)
            })
            .catch(err => {
                res.json({ message: 'Something went wrong.', error: err})
            })
    },

    findProduct : (req, res) => {
        Product.findOne({_id: req.params.id})
        .then( product => {
            console.log(product)
            res.json(product)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    },

    createOneProduct : (req,res) => {
        Product.create(req.body)
            .then( newProduct => {
                res.json(newProduct)
            })
            .catch(err => {
                res.json({message: "Something went wrong.", error: err})
            })
    },

    updateProduct : (req,res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then( updatedProduct => {
                res.json(updatedProduct)
            })
            .catch(err => {
                res.json({message: "Something went wrong.", error: err})
            })
    },

    deleteProduct : (req, res) => {
        Product.findByIdAndDelete({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
    
}