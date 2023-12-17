import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, ProductsPage } from '../pages'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
        </Routes>
    </>)
}

export default AllRoutes