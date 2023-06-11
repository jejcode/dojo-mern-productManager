import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import { getProducts, deleteProductById, createProduct } from '../services/product-service'

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

    const removeFromDom = productId => {
        deleteProductById(productId)
            .then(res => {
                setProducts(products.filter(product => product._id !== productId))

            })
    }

    const createNewProduct = productParams => {
        createProduct(productParams)
            .then( newProduct => {
                console.log(newProduct)
                setProducts([newProduct,...products])
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <Header />
            <ProductForm onSubmitProp={createNewProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main