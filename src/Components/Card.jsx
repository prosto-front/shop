export const Card = ({ img, name, rating, price, brand }) => {
  return (
    <div>
      <div className="card">
        <img width={200} height={200} src={img} alt="здeсь было фото" />
        <h3>{brand}</h3>
        <div>{name}</div>
        <div>рейтинг: {rating}</div>
        <h3>${price}</h3>
      </div>
    </div>
  )
}
