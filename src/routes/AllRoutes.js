import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import ProductsPage from '../pages/Products/ProductsPage'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
        </Routes>
    </>)
}

export default AllRoutes