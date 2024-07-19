import "./index.scss"

export const Navbar = ({ handleChangeCategory, selectedCategory }) => {
  return (
    <div className="navbar">
      <div
        onClick={() => handleChangeCategory("phone")}
        className={selectedCategory === "phone" && "active"}
      >
        Телефоны
      </div>
      <div
        onClick={() => handleChangeCategory("laptop")}
        className={selectedCategory === "laptop" && "active"}
      >
        Ноутбуки
      </div>
      <div
        onClick={() => handleChangeCategory("monitor")}
        className={selectedCategory === "monitor" && "active"}
      >
        Мониторы
      </div>
    </div>
  )
}
