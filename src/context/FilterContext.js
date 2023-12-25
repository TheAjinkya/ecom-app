import { createContext, useContext, useReducer } from "react"
import { FilterReducer } from "../reducers/FilterReducers"

const filterInitialState = {
    productList: [10, 20],
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

    const productList = state.productList

    const value = {
        productList,
        initialProductList
    }
    return (<FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>)
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    return context;
}