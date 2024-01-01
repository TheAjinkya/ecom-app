export const CartReducers = (state, action) => {
    const { type, payload } = action
    console.log("type", type, payload)
    switch (type) {
        case "ADD_TO_CART":
            return { ...state, cartList: payload.products, total: payload.total }
        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.products, total: payload.total }
        case "CLEAR_CART":
            return { ...state, cartList: payload.products, total: payload.total }
    }

}