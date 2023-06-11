import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import { getProducts, createProduct } from '../services/product-service'

const Main = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                console.log(products)
                setProducts(products)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const createNewProduct = productParams => {
        createProduct(productParams)
            .then( newProduct => {
                console.log(newProduct)
                setProducts([...products, newProduct])
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Header />
            <ProductForm onSubmitProp={createNewProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <ProductList products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main