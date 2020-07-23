import React ,{useState } from 'react'
import {Form ,Button , Container , Col , Row} from 'react-bootstrap'

function ProductForm({setView ,setRenderAs , renderAs , initialState}) {

    const handleOnChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        var temp = JSON.parse(JSON.stringify(data))
        temp[name] = value
        setData(temp)
    } 

    const handleOnAdd = async (event) =>{
        event.preventDefault()
        console.log(data)
        var response = await fetch("http://localhost:4040/product", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }).then((res) => res.json())
          if(response.message === "product added"){
              // DO something ....  with response.data
              console.log(response.data)
              setView(2)
          }
          else{
              console.log(response.message)
          }
    }
    const handleOnEdit = async (event) => {
        event.preventDefault()
        console.log(data)
        var response = await fetch("http://localhost:4040/product", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }).then((res) => res.json())
          if(response.message === "product updated"){
              // DO something ....  with response.data
              console.log(response.data)
              setView(2)
          }
          else{
              console.log(response.message)
          }
    }

    const handleOnSubmit = (event) => {
        if(renderAs === "add")
            handleOnAdd(event)
        else 
            handleOnEdit(event)
    }

    const [data, setData] = useState(initialState)

    return (
        <Container className="mt-3"> <Row>
        <Col md={4}></Col>
        <Col md={4}>
        <Form onSubmit={handleOnSubmit} >
        <Form.Group controlId="formBasicText">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" onChange={handleOnChange} value={data.name} name="name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail1">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="Product Price" onChange={handleOnChange} value={data.price} name="price" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword1">
          <Form.Label>Stock Available</Form.Label>
          <Form.Control type="number" placeholder="Stock Available" onChange={handleOnChange} value={data.stock} name="stock"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            {renderAs === "add" ? "Add Product" : "Edit Product" }
        
        </Button>
      </Form>
      </Col>
      <Col md={4}></Col>
      </Row>
      </Container>
    )
}

export default ProductForm
