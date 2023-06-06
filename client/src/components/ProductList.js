import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {products} = props

    return (
        <div className="mt-4 row justify-content-center">
            <div className="col-auto">
                <h3>All Products:</h3>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList