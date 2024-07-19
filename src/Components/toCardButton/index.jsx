import { ShoppingCartOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteFromCart } from "../../pages/cart/slices"

export const ToCartButton = ({ product }) => {
  const cartItems = useSelector((state) => state.cart.cart)

  const dispatch = useDispatch()

  const onClickAddToCart = () => {
    if (cartItems.some((el) => el.id === product.id)) {
      dispatch(deleteFromCart(product.id))
    } else {
      dispatch(addToCart(product))
    }
  }

  const color = cartItems.some((item) => item.id === product.id)
    ? "#A2F8A9"
    : "#C7C7C7"

  return (
    <ShoppingCartOutlined
      onClick={onClickAddToCart}
      style={{ fontSize: "40px", color }}
    />
  )
}
