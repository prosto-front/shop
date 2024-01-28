export const Card = ({ img, name, rating, price }) => {
  return (
    <div>
      <div className="card">
        <img width={200} height={200} src={img} alt="здeсь было фото" />
        <div>{name}</div>
        <div>рейтинг: {rating}</div>
        <h3>${price}</h3>
      </div>
    </div>
  )
}
