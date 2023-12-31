export const CartReducers = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD_CART":
            return { ...state, cartList: payload.products, total: payload.total }
        case "REMOVE_CART":
            return { ...state, cartList: payload.products, total: payload.total }
        case "CLEAR_CART":
            return { ...state, cartList: payload.products, total: payload.total }
        default:
            throw new Error("No Case Found!")
    }

}