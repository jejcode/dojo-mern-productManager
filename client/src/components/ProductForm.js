import React, { useState } from 'react'
// import axios from 'axios'
// import { createProduct } from '../services/product-service'

const ProductForm = (props) => {
    const {onSubmitProp, initialTitle, initialPrice, initialDescription} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        onSubmitProp({title, price, description})
    }

    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <form onSubmit={ handleOnSubmit }>
                    <div>
                        <label className="form-label" htmlFor="title">Title:</label>
                        <input className="form-control mb-2" type="text" name="title" id="title" onChange={ (e) => {setTitle(e.target.value)}} value={ title }/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="price">Price:</label>
                        <input className="form-control mb-2" type="text" name="price" id="price" onChange={ (e) => {setPrice(e.target.value)}} value={ price }/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="description">Description:</label>
                        <input className="form-control mb-2" type="text" name="description" id="description" onChange={ (e) => {setDescription(e.target.value)}} value={ description }/>
                    </div>
                    <input className="btn btn-primary mt-2" type="submit" value="Save Product" />
                </form>
            </div>
        </div>
    )
}

export default ProductForm