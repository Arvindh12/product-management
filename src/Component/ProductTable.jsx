import React , {useEffect ,useState } from 'react'
import {Table , Container} from 'react-bootstrap'
import ProductList from '../Component/ProductList'

function ProductTable({ setRenderAs, setView, setInitialState }) {
    useEffect(() => {
// Update table....
fetch("http://localhost:4040/products").then((res) => res.json()).then((data) => {
    setProducts(data)
}).catch(err => {console.log(err)})

    }, [])

    const [products, setProducts] = useState([])

    return (
        <Container>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

      {products.map(product => <ProductList product={product} setRenderAs={setRenderAs} setView={setView} setInitialState={setInitialState} />)}

  </tbody>
</Table>
</Container>
    )
}

export default ProductTable
