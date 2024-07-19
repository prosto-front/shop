import { useDispatch } from "react-redux"
import "./index.css"
import { deleteFromCart, updateProductCart } from "./slices"
import { DeleteOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

export const CartItem = ({ product }) => {
  const { name, brand, price, img, id, quantity } = product
  const dispatch = useDispatch()

  const handleChangePlusQuantity = () => {
    dispatch(updateProductCart({ ...product, quantity: quantity + 1 }))
  }

  const handleChangeMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(updateProductCart({ ...product, quantity: quantity - 1 }))
    }
  }

  return (
    <div className="cartItemBlock">
      <Link to={`/product/${id}`}>
        <img width={100} height={100} src={img} alt="здeсь было фото" />
      </Link>
      <Link className="link" to={`/product/${id}`}>
        <div className="cartItemTitle">
          <h3>{brand}</h3>
          <div>{name}</div>
        </div>
      </Link>
      <div className="cartItemPriceWrapper">
        <div className="cartItemQuantity">
          <button onClick={handleChangeMinusQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleChangePlusQuantity}>+</button>
        </div>
        <h3 className="cartItemPrice">${price * quantity}</h3>
      </div>
      <DeleteOutlined
        onClick={() => dispatch(deleteFromCart(id))}
        style={{ fontSize: "27px", color: "red" }}
      />
    </div>
  )
}
