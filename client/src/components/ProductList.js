import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [products])

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