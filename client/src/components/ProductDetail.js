import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import { deleteProductById,getOneProduct } from '../services/product-service'

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const deleteProduct = (productId) => {
        deleteProductById(productId)
            .then(res => navigate('/products'))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getOneProduct(id)
            .then( oneProduct => {
                setProduct(oneProduct)
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-auto">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button className="btn btn-sm btn-outline-danger mx-1" onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
            </div>
        </div>
    )
}

export default ProductDetail