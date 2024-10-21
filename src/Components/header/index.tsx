import { Link } from "react-router-dom"
import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons"
import "./index.scss"
import { debounce } from "lodash"
import { Button, Input, Modal } from "antd"
import { useAppSelector } from "../../reduxHooks"
import { useState } from "react"
import { Login } from "./Login"

type Props = {
  searchParams: URLSearchParams
  handleOpen: () => void
  handleChangeFilters: (a: string, b: string) => void
}

export const Header = ({
  handleChangeFilters,
  handleOpen,
  searchParams,
}: Props) => {
  const debouncedHandler = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeFilters("q", e.target.value),
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

  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="header">
      <Button
        size="large"
        type="text"
        onClick={() => setOpenModal(true)}
        icon={<UserOutlined style={{ fontSize: 30, color: "#fff" }} />}
      />
      <h1 className="logo">AM</h1>
      <div className="menuIconWrapper">
        {filters && <div className="circle" />}
        <div onClick={handleOpen}>
          <MenuOutlined className="menuIcon" />
        </div>
      </div>
      <Input
        size={"small"}
        // prefixCls={<SearchOutlined />}
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
      <Modal
        footer={null}
        onCancel={closeModal}
        open={openModal}
        destroyOnClose
      >
        <Login />
      </Modal>
    </div>
  )
}
