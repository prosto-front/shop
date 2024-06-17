import { FavoriteIcon } from "./FavoriteIcon"

export const Card = ({
  img,
  name,
  rating,
  price,
  brand,
  addToFavorites,
  id,
  favoritesIds,
}) => {
  return (
    <div className="card">
      <img width={200} height={200} src={img} alt="здeсь было фото" />
      <div className="cardConten">
        <div>
          <div>{name}</div>
          <h3>{brand}</h3>
          <div>рейтинг: {rating}</div>
          <h3>${price}</h3>
        </div>
        <div className="cardIcon" onClick={() => addToFavorites(id)}>
          <FavoriteIcon active={favoritesIds.includes(id)} />
        </div>
      </div>
    </div>
  )
}
