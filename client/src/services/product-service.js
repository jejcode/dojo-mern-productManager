import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})
const getProducts = async () => {
    try{
        const res = await instance.get('/products')
        return res.data
    }
    catch (err) {
        console.log(err)
        throw err
    }
}
const getOneProduct = async (productId) => {
    try{
        const res = await instance.get(`products/${productId}`)
        return res.data
    }
    catch (err) {
        console.log(err)
        throw err
    }
}
const createProduct = async (formData) => {
    try{
        const res = await instance.post('/products', formData)
        return res.data
    }
    catch (err) {
        console.log(err)
        throw err
    }
}
const updateOneProduct = async (productId, formData) => {
    try{
        const res = await instance.patch(`/products/${productId}`, formData)
        return res.data
    }
    catch (err) {
        console.log(err)
        throw err
    }
}
const deleteProductById = async (productId) => {
    try{
        const res = await instance.delete(`/products/${productId}`)
        return res.data
    }
    catch (err) {
        console.log(err)
        throw err
    }
}

export {
    getProducts,
    getOneProduct,
    createProduct,
    updateOneProduct,
    deleteProductById
}