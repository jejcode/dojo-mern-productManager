import React from 'react'
import {Link} from 'react-router-dom'
// import { deleteProductById} from '../services/product-service'

const ProductList = (props) => {
    const {removeFromDom, products} = props

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
                            <button className="btn btn-sm btn-outline-danger mx-1" onClick={(e) => {removeFromDom(product._id)}}>Delete</button>
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList