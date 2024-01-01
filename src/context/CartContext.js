import { createContext, useContext, useReducer } from "react"
import { CartReducers } from "../reducers/CartReducers"

const cartInitialValue = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialValue)

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducers, cartInitialValue)

    function addToCart(product) {
        console.log("AddToCart", product)
        const updatedList = state.cartList.concat(product)
        const updatedTotal = state.total + product.price
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedList = state.cartList.filter(element => element.id !== product.id)
        const updatedTotal = state.total - product.price
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList
            }
        })
    }

    const clearCart = () => {
        const updatedList = []
        const updatedTotal = 0;
        dispatch({
            type: "CLEAR",
            payload: {
                products: updatedList
            }
        })
    }

    const value = {
        cartList: state.cartList,
        addToCart,
        removeFromCart,
        clearCart,
        total: state.total
    }
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}