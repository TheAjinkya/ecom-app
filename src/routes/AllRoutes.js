import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, Login, Logout, ProductList, Register } from '../pages'
import { ProductDetail } from '../pages/ProductDetail'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </>)
}

export default AllRoutes