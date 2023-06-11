import React from "react";
import { deleteProductById } from "../services/product-service";

const DeleteButton = (props) => {
    const {productId, successCallback} = props
    const deleteProduct = () => {
        deleteProductById(productId)
            .then(res => {
                successCallback(productId)
            })
    }

    return (
        <button className="btn btn-outline-danger btn-sm" onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton