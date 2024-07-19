import { useDispatch, useSelector } from "react-redux"
import {
  addToFavorites,
  deleteFavorites,
} from "../../pages/favorite/favoritesSlice"
import { HeartFilled, HeartOutlined } from "@ant-design/icons"

export const ToFavoriteButton = ({ product }) => {
  const { favorites } = useSelector((state) => state.favorites)

  const dispatch = useDispatch()

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
