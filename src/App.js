import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { FavoritePage } from "./FavoritePage"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setProducts(result)
      })
      .catch((error) => console.log(error))
  }, [])

  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [favoritesIds, setFavoritesIds] = useState([])

  const [openNavbar, setOpenNavbar] = useState(false)

  const filteredProduct = products.filter(
    (el) =>
      el.category.includes(selectedCategory) &&
      el.name.toLowerCase().includes(inputName.toLowerCase())
  )

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleOpen = () => {
    setOpenNavbar(!openNavbar)
  }

  const handleChangeCategory = (changedCategory) => {
    if (changedCategory === selectedCategory) {
      setSelectedCategory("")
      return
    }

    setSelectedCategory(changedCategory)
  }

  const addToFavorites = (id) => {
    if (favoritesIds.includes(id)) {
      setFavoritesIds(favoritesIds.filter((i) => i !== id))
      return
    }

    setFavoritesIds([...favoritesIds, id])
  }

  const favoriteProducts = products.filter((product) =>
    favoritesIds.includes(product.id)
  )

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              loading={loading}
              openNavbar={openNavbar}
              handleInput={handleInput}
              handleOpen={handleOpen}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
              filteredProduct={filteredProduct}
              addToFavorites={addToFavorites}
              favoritesIds={favoritesIds}
            />
          }
        />

        <Route
          path="/favorite"
          element={<FavoritePage favoriteProducts={favoriteProducts} />}
        />
      </Routes>
    </div>
  )
}

export default App
