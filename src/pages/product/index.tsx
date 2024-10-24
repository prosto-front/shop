import { useParams } from "react-router-dom"
import { loadProduct } from "./slices"
import { useAppDispatch, useAppSelector } from "../../reduxHooks"
import { useEffect } from "react"
import "./index.scss"
import { ToCartButton } from "../../Components/toCardButton"
import { ToFavoriteButton } from "../../Components/toFavoriteButton"
import { ProductComments } from "./comments"

export const Product = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const { product } = useAppSelector((state) => state.product)

  useEffect(() => {
    if (id) {
      dispatch(loadProduct(id))
    }
  }, [])

  if (!product) {
    return <div>Loading...</div>
  }

  const { name, brand, price, img, rating, description } = product

  return (
    <>
      <div className="productPageBlock">
        <img width={400} height={400} src={img} alt="здeсь было фото" />
        <div className="productPageContent">
          <div>
            <div>{name}</div>
            <h3>{brand}</h3>
            <div>рейтинг: {rating}</div>
            <h3>${price}</h3>
            <p>{description}</p>
          </div>
          <div className="productPageIcons">
            <ToFavoriteButton product={product} />
            <ToCartButton product={product} />
          </div>
        </div>
      </div>

      <ProductComments productId={product.id} />
    </>
  )
}
