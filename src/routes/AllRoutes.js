import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, Login, Logout, ProductList, Register } from '../pages'
import { ProductDetail } from '../pages/ProductDetail'
import CartPage from '../pages/Cart/CartPage'
import { ProtectedRoute } from './ProtectedRoutes'

function AllRoutes() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        </Routes>
    </>)
}

export default AllRoutes