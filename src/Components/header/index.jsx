import { Link } from "react-router-dom"
import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons"
import "./index.scss"
import { debounce } from "lodash"
import { Input } from "antd"
import { useAppSelector } from '../../reduxHooks'

export const Header = ({ handleChangeFilters, handleOpen, searchParams }) => {
  const debouncedHandler = debounce(
    (e) => handleChangeFilters("q", e.target.value),
    700
  )

  const { cart } = useAppSelector((state) => state.cart)
  const { favorites } = useAppSelector((state) => state.favorites)

  const productCartQuantitty = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  )
  const productFavoriteQuantitty = favorites.reduce(
    (acc, product) => acc + product.quantity,
    0
  )

  const filters =
    searchParams.get("category") ||
    searchParams.get("price_gte") ||
    searchParams.get("price_lte")

  return (
    <div className="header">
      <h1 className="logo">AM</h1>
      <div className="menuIconWrapper">
        {filters && <div className="circle" />}
        <div onClick={handleOpen}>
          <MenuOutlined className="menuIcon" />
        </div>
      </div>
      <Input
        size={"small"}
        prefixCls={<SearchOutlined />}
        onChange={debouncedHandler}
        defaultValue={searchParams.get("q") || ""}
      />
      <div className="headerIcons">
        <Link className="link" to="/cart">
          <ShoppingCartOutlined style={{ fontSize: "50px", color: "#fff" }} />
        </Link>
        {!!productCartQuantitty && (
          <div className="iconQuantity">{productCartQuantitty}</div>
        )}
        <Link className="link" to="/favorite">
          <div className="favoriteIconHeader">
            <HeartOutlined style={{ fontSize: "40px", color: "#fff" }} />
          </div>
        </Link>
        {!!productFavoriteQuantitty && (
          <div className="iconQuantity">{productFavoriteQuantitty}</div>
        )}
      </div>
    </div>
  )
}
