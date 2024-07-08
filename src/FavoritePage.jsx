import { Link } from "react-router-dom"
import { Card } from "./Components/Card"
import { useSelector, useDispatch } from "react-redux"
import { increment } from "./counterSlice"

export const FavoritePage = ({ favoriteProducts }) => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log(count)
  return (
    <div>
      <button onClick={() => dispatch(increment())}>plus</button>

      {/* <div className="card-block">
        {favoriteProducts.length ? (
          favoriteProducts.map((el) => <Card key={el.id} product={el} />)
        ) : (
          <h3>Товаров нет в избранном</h3>
        )}
      </div> */}
      <Link to="/">
        <div>Назад на главную</div>
      </Link>
    </div>
  )
}
