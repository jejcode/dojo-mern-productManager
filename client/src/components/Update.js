import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


const Update = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch( err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then( res => {
                console.log(res)
                navigate('/products')
            })
            .catch( err => console.log(err))
    }

    return (
        <div className='mt-4 row justify-content-center'>
            <div className="col-auto">
                <h1>Update Product</h1>
                <form onSubmit={updateProduct}>
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
                    <input className="btn btn-primary mt-2" type="submit" value="Save updates" />
                </form>
            </div>
        </div>
    )
}

export default Update