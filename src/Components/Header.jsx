import { Link } from "react-router-dom"
import { FavoriteIcon } from "./FavoriteIcon"

export const Header = ({ handleInput, handleOpen }) => {
  return (
    <div className="header">
      <div>
        <img
          width={60}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"
          alt="здсь фото"
        />
      </div>
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
      <input onChange={(e) => handleInput(e.target.value)} />
      <Link to='/favorite'>
        <div className="favoriteIconHeader">
          <FavoriteIcon />
        </div>
      </Link>
    </div>
  )
}
