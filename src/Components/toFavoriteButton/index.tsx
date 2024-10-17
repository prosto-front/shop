import { useAppDispatch, useAppSelector } from "../../reduxHooks"
import {
  addToFavorites,
  deleteFavorites,
} from "../../pages/favorite/favoritesSlice"
import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { ProductType } from "../../types"

export const ToFavoriteButton = ({ product }: { product: ProductType }) => {
  const { favorites } = useAppSelector((state) => state.favorites)

  const dispatch = useAppDispatch()

  const onClickFavorites = () => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id))
    } else {
      dispatch(addToFavorites(product))
    }
  }

  const isFavorite = favorites.some((item) => item.id === product.id)

  return (
    <div onClick={onClickFavorites}>
      {isFavorite ? (
        <HeartFilled style={{ fontSize: "40px", color: "#f7ca50" }} />
      ) : (
        <HeartOutlined style={{ fontSize: "40px" }} />
      )}
    </div>
  )
}
