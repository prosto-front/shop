import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { FavoritePage } from "./FavoritePage"

function App() {
  const [products, setProducts] = useState([])
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const [openNavbar, setOpenNavbar] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:5000/products?q=${inputName}&category_like=${selectedCategory}`
    )
      .then((response) => response.json())
      .then((result) => {
        setLoading(false)
        setProducts(result)
      })
      .catch((error) => console.log(error))
  }, [inputName, selectedCategory])

  const loadFavorites = async () => {
    const response = await fetch(`http://localhost:5000/favorites`)
    const result = await response.json()

    setFavoriteProducts(result)
  }

  useEffect(() => {
    loadFavorites()
  }, [])

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

  const addToFavorites = (product) => {
    if (favoriteProducts.some((el) => el.id === product.id)) {
      fetch(`http://localhost:5000/favorites/${product.id}`, {
        method: "DELETE",
      }).then(() => loadFavorites())
    } else {
      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => loadFavorites())
    }
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              openNavbar={openNavbar}
              handleInput={handleInput}
              handleOpen={handleOpen}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
              products={products}
              addToFavorites={addToFavorites}
              favoritesIds={favoriteProducts.map((i) => i.id)}
              loading={loading}
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
