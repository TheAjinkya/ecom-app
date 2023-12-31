import { useCart } from "../../context/CartContext"
import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"

function CartPage() {
  const { cartList, total } = useCart();
  console.log("total", cartList, total)
  return (
    <div>
      {cartList.length === 0 ? <CartEmpty /> : <CartList />}
    </div>
  )
}

export default CartPage