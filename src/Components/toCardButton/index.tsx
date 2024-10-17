import { ShoppingCartOutlined } from "@ant-design/icons"
import { useAppDispatch, useAppSelector } from "../../reduxHooks"
import { addToCart, deleteFromCart } from "../../pages/cart/slices"
import { ProductType } from "../../types"

export const ToCartButton = ({ product }: { product: ProductType }) => {
  const cartItems = useAppSelector((state) => state.cart.cart)

  const dispatch = useAppDispatch()

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
