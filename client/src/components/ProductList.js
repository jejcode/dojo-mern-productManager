import React from 'react'
import {Link} from 'react-router-dom'
import { deleteProductById} from '../services/product-service'

const ProductList = (props) => {
    const {removeFromDom, products} = props

    const deleteProduct = (productId) => {
        deleteProductById(productId)
            .then(res => {
                //axios deletes the document from the database, but it still needs to be removed
                // from the DOM, or it needs to be removed from the display
                removeFromDom(productId)
            })
            .catch( err => console.log(err))

    }

    return (
        <div className="mt-4 row justify-content-center">
            <div className="col-auto">
                <h3>All Products:</h3>
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className="mb-2">
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <span className="mx-1">|</span>   
                            <Link to={`/products/edit/${product._id}`}>Edit</Link>
                            <span className="mx-1">|</span>   
                            <button className="btn btn-sm btn-outline-danger mx-1" onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList