import { Link } from "react-router-dom"
import { Card } from "./Components/Card"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice"
import { addPost } from "./postSlice"

export const FavoritePage = ({ favoriteProducts }) => {
  const count = useSelector((state) => state.counter.value)
  const posts = useSelector((state) => state.posts.posts)
  
  const dispatch = useDispatch()

  console.log(posts)
  return (
    <div>
      <button onClick={() => dispatch(addPost("old post"))}>add</button>
      {posts.map((i) => (
        <div>{i}</div>
      ))}
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
