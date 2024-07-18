import { Link } from "react-router-dom"
import "./index.css"

export const ButtonBack = () => {
  return (
    <div className="buttonBack">
      <Link to="/">
        <h2>Назад на главную</h2>
      </Link>
    </div>
  )
}
