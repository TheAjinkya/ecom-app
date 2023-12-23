import { createContext, useContext } from "react"

const filterInitialState = {
    productList: [10, 20],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({ children }) => {
    const value = {
        productList: [1, 2, 3]
    }
    return (<FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>)
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    return context;
}