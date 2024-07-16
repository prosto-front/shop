import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { FavoritePage } from "./FavoritePage"
import {
  addToFavorites,
  deleteFavorites,
  fetchFavorites,
} from "./favoritesSlice"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice"

function App() {
  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [openNavbar, setOpenNavbar] = useState(false)

  const favorites = useSelector((state) => state.favorites.favorites)
  const products = useSelector((state) => state.products.products)
  const productsLoading = useSelector((state) => state.products.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts({ inputName, selectedCategory }))
  }, [inputName, selectedCategory])

  useEffect(() => {
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

  const onClickFavorites = (product) => {
    if (favorites.some((el) => el.id === product.id)) {
      dispatch(deleteFavorites(product.id))
    } else {
      dispatch(addToFavorites(product))
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
              onClickFavorites={onClickFavorites}
              favoritesIds={favorites.map((i) => i.id)}
              loading={productsLoading}
            />
          }
        />

        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  )
}

export default App
