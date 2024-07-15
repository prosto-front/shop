import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { FavoritePage } from "./FavoritePage"
import { fetchFavorites } from "./favoritesSlice"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputName, setInputName] = useState("")

  const [selectedCategory, setSelectedCategory] = useState("")
  
  const favorites = useSelector((state) => state.favorites.favorites)

  const [openNavbar, setOpenNavbar] = useState(false)
  const dispatch = useDispatch()

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

  useEffect(() => {
    // loadFavorites()
    dispatch(fetchFavorites())
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
    if (favorites.some((el) => el.id === product.id)) {
      fetch(`http://localhost:5000/favorites/${product.id}`, {
        method: "DELETE",
      }).then(() => dispatch(fetchFavorites()))
    } else {
      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => dispatch(fetchFavorites()))
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
              favoritesIds={favorites.map((i) => i.id)}
              loading={loading}
            />
          }
        />

        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App
