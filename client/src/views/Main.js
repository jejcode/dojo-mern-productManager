import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [products, setProducts] = useState([])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <Header />
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main