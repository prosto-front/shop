import { ShoppingCartOutlined } from "@ant-design/icons"
import { useParams } from "react-router-dom"
import { loadProduct } from "./slices"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./index.css"

export const Product = ({ onClickAddToCart }) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { product } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(loadProduct(id))
  }, [])

  if (!product) {
    return <div>Loading...</div>
  }

  const { name, brand, price, img, rating } = product

  return (
    <div className="productPageBlock">
      <img width={400} height={400} src={img} alt="здeсь было фото" />
      <div className="">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>рейтинг: {rating}</div>
          <h3>${price}</h3>
        </div>
        <div>
          {/* {favoritesIds && (
            <div className="cardIcon" onClick={() => onClickFavorites(product)}>
              <FavoriteIcon active={isFavorite} />
            </div>
          )} */}
          {/* {cartIds && (
            <ShoppingCartOutlined
              onClick={() => onClickAddToCart(product)}
              style={{ fontSize: "40px", color: color }}
            />
          )} */}
        </div>
      </div>
    </div>
  )
}
