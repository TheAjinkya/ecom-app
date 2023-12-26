import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { FilterReducer } from "../reducers/FilterReducers"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

    function initialProductList(products) {
        dispatch({ type: "PRODUCT_LIST", payload: { products: products } })
    }

    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products
    }

    function inStock(products) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products
    }

    function rating(products) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter(product => product.rating >= 4)
        }
        if (state.ratings === "3STARSABOVE") {
            return products.filter(product => product.rating >= 3)
        }
        if (state.ratings === "2STARSABOVE") {
            return products.filter(product => product.rating >= 2)
        }
        if (state.ratings === "1STARSABOVE") {
            return products.filter(product => product.rating >= 1)
        }
        return products
    }

    function sort(products) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => a.price - b.price)
        }
        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => b.price - a.price)
        }
        return products
    }

    const filteredProducts = rating(sort(inStock(bestSeller(state.productList))));

    useEffect(() => {
        console.log("filteredProducts", filteredProducts)
    }, [filteredProducts])

    const value = {
        state,
        dispatch,
        products: filteredProducts || [],
        initialProductList: initialProductList
    }
    return (<FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>)
}

export const useFilter = () => {
    return useContext(FilterContext)
}