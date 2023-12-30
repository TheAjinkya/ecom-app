import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"

function CartPage() {
  const cartLength = 0
  return (
    <div>
      {cartLength!==0 ? <CartEmpty/> : <CartList/>}
    </div>
  )
}

export default CartPage