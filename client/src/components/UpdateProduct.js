import React, { useState, useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { getOneProduct, updateOneProduct } from '../services/product-service'
import ProductForm from './ProductForm'


const UpdateProduct = (props) => {
    const {id} = useParams()
    const [productToEdit, setProductToEdit] = useState({})
    const [loaded, setLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        getOneProduct(id)
            .then( thisProduct => {
                setProductToEdit(thisProduct)
                setLoaded(true)
            })
            .catch( err => console.log(err))
    }, [])

    const updateProduct = productParam => {
        // e.preventDefault()
        updateOneProduct(id, productParam)
            .then( updatedProduct => {
                navigate('/products')
            })
            .catch( err => console.log(err))
    }

    return (
        <div className='mt-4 row justify-content-center'>
            <div className="col-auto">
                <h1>Update Product</h1>
                {
                loaded && <ProductForm onSubmitProp={updateProduct} initialTitle={productToEdit.title} initialPrice={productToEdit.price} initialDescription={productToEdit.description}/>
                }
            </div>
        </div>
    )
}

export default UpdateProduct