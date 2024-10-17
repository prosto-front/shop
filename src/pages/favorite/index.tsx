import { Card } from "../../Components/productCard"
import { useAppSelector } from "../../reduxHooks"
import { ButtonBack } from "../../Components/buttonBack"

export const FavoritePage = () => {
  const favorites = useAppSelector((state) => state.favorites.favorites)

  return (
    <div>
      <div className="card-block">
        {favorites.length ? (
          favorites.map((el) => <Card key={el.id} product={el} />)
        ) : (
          <h3>Товаров нет в избранном</h3>
        )}
      </div>
      <ButtonBack />
    </div>
  )
}
