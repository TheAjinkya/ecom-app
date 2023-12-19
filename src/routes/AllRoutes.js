import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductList } from '../pages'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
        </Routes>
    </>)
}

export default AllRoutes