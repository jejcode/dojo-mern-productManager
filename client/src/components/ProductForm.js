import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then( res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-2">
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
                    <input className="btn btn-primary" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    )
}

export default ProductForm