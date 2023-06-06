import React, {useState} from 'react'
import Header from '../components/Header'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [products, setProducts] = useState([])
    return (
        <div>
            <Header />
            <ProductForm products={products} setProducts={setProducts}/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main