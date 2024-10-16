import { useAppSelector } from '../../reduxHooks'
import { ButtonBack } from "../../Components/buttonBack"
import { CartItem } from "./CartItem"
import "./index.scss"

export const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart)

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  )

  const productCount = cart.reduce((acc, product) => acc + product.quantity, 0)

  return (
    <div>
      <div className="">
        {cart.length ? (
          cart.map((el) => (
            <CartItem
              key={el.id}
              product={el}
            />
          ))
        ) : (
          <h3>Товаров нет в корзине</h3>
        )}
      </div>
      <div className="totalPriceBlock">
        <div className="totalPriceRow">
          <div>Количество шт:</div>&nbsp;&nbsp;
          <b>{productCount}</b>
        </div>
        <div className="totalPriceRow">
          <h3>Итого:</h3>
          <h3 className="totalPrice">${totalPrice}</h3>
        </div>
      </div>
      <ButtonBack />
    </div>
  )
}
