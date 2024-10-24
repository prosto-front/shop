import { Link } from "react-router-dom"
import { ToFavoriteButton } from "../toFavoriteButton"
import { ToCartButton } from "../toCardButton"
import "./index.scss"
import { memo } from "react"
import { ProductType } from "../../types"

type Props = {
  product: ProductType
}

export const Card = memo(({ product }: Props) => {
  const { name, brand, price, img, rating, id } = product

  return (
    <div className="card">
      <Link className="link" to={`/product/${id}`}>
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
          <ToFavoriteButton product={product} />
          <ToCartButton product={product} />
        </div>
      </div>
    </div>
  )
})
