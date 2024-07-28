import { Link } from "react-router-dom"
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import "./index.scss"
import { debounce } from "lodash"
import { Input } from "antd"

export const Header = ({ handleChangeFilters, handleOpen, searchParams }) => {
  const debouncedHandler = debounce(
    (e) => handleChangeFilters("q", e.target.value),
    700
  )

  return (
    <div className="header">
      <h1>AM</h1>
      <div onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fff"
            d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"
          ></path>
        </svg>
      </div>
      <Input
        onChange={debouncedHandler}
        defaultValue={searchParams.get("q") || ""}
      />
      <Link to="/cart">
        <ShoppingCartOutlined style={{ fontSize: "50px", color: "#fff" }} />
      </Link>
      <Link to="/favorite">
        <div className="favoriteIconHeader">
          <HeartOutlined style={{ fontSize: "40px", color: "#fff" }} />
        </div>
      </Link>
    </div>
  )
}
