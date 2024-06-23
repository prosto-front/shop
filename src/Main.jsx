import { Card } from "./Components/Card"
import { Header } from "./Components/Header"
import { Navbar } from "./Components/Navbar"

export const Main = ({
  openNavbar,
  handleInput,
  handleOpen,
  handleChangeCategory,
  selectedCategory,
  filteredProduct,
  addToFavorites,
  favoritesIds,
  loading
}) => {
  return (
    <>
      <Header handleInput={handleInput} handleOpen={handleOpen} />
      {openNavbar && (
        <Navbar
          handleChangeCategory={handleChangeCategory}
          selectedCategory={selectedCategory}
        />
      )}
      {loading && <h1>Loading...</h1>}
      <div className="card-block">
        {filteredProduct.map((el) => (
          <Card
            addToFavorites={addToFavorites}
            favoritesIds={favoritesIds}
            id={el.id}
            key={el.id}
            name={el.name}
            brand={el.brand}
            img={el.img}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </>
  )
}
