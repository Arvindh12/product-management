import React from 'react'
import ProductTable from '../Component/ProductTable'

function Products({ setRenderAs, setView, setInitialState }) {
    return (
        <div>
            <ProductTable setRenderAs={setRenderAs} setView={setView} setInitialState={setInitialState} />
        </div>
    )
}

export default Products
