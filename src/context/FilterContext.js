import { createContext } from "react"

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

export const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {
    const value = {
        productList: [1, 2, 3]
    }
    return (<FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>)
}