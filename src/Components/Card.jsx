import { ShoppingCartOutlined } from "@ant-design/icons"
import { FavoriteIcon } from "./FavoriteIcon"
import { Link } from "react-router-dom"

export const Card = ({
  product,
  onClickFavorites,
  favoritesIds,
  cartIds,
  onClickAddToCart,
}) => {
  const { name, brand, price, img, rating, id } = product

  const color = cartIds && cartIds.includes(id) ? "#A2F8A9" : "#C7C7C7"

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img width={200} height={200} src={img} alt="здeсь было фото" />
      </Link>
      <div className="cardContent">
        <Link className="link" to={`/product/${id}`}>
          <div>
            <div>{name}</div>
            <h3>{brand}</h3>
            <div>рейтинг: {rating}</div>
            <h3>${price}</h3>
          </div>
        </Link>
        <div className="iconsMainBlock">
          {favoritesIds && (
            <div className="cardIcon" onClick={() => onClickFavorites(product)}>
              <FavoriteIcon active={favoritesIds.includes(id)} />
            </div>
          )}
          {cartIds && (
            <ShoppingCartOutlined
              onClick={() => onClickAddToCart(product)}
              style={{ fontSize: "40px", color: color }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
