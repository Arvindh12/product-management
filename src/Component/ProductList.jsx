import React from 'react'
import {Button} from 'react-bootstrap'

function ProductList({product , setRenderAs, setView, setInitialState }) {
    const handleOnDelete = async (id) => {
        var response = await fetch("http://localhost:4040/product", {
            method : "DELETE" , body : JSON.stringify(product) ,
            headers : {'Content-Type' : 'application/json'}
        } ).then((res) => res.json())
        if(response.message === "product deleted"){
            console.log("deleted ...")
            setView(1)
            setView(2)
        }
        else{
            console.log("failed")
        }

    }
    const handleOnEdit = (id) => {
        setInitialState(product)
        setRenderAs('edit')
        setView(1)
    }

    return (
        <tr>
      <td>1</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.stock}</td>
    <td><Button variant={"danger"} onClick={() => handleOnDelete(product._id)}>Delete</Button>
     <Button onClick={() => handleOnEdit(product._id)} >Edit</Button> </td>
    </tr>
    )
}

export default ProductList
