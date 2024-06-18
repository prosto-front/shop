import { Link } from "react-router-dom"
import { Card } from "./Components/Card"

export const FavoritePage = ({ favoriteProducts }) => {
  return (
    <div>
      <div className="card-block">
        {favoriteProducts.length ? (
          favoriteProducts.map((el) => (
            <Card
              id={el.id}
              key={el.id}
              name={el.name}
              brand={el.brand}
              img={el.img}
              rating={el.rating}
              price={el.price}
            />
          ))
        ) : (
          <h3>Товаров нет в избранном</h3>
        )}
      </div>

      <Link to="/">
        <div>Назад на главную</div>
      </Link>
    </div>
  )
}
