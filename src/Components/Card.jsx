import { FavoriteIcon } from "./FavoriteIcon"

export const Card = ({ product, onClickFavorites, favoritesIds }) => {
  const { name, brand, price, img, rating, id } = product

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

        {favoritesIds && (
          <div className="cardIcon" onClick={() => onClickFavorites(product)}>
            <FavoriteIcon active={favoritesIds.includes(id)} />
          </div>
        )}
      </div>
    </div>
  )
}
