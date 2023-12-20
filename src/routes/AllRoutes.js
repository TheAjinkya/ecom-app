import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductList } from '../pages'
import { ProductDetail } from '../pages/ProductDetail'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    </>)
}

export default AllRoutes