import { useEffect, useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { FavoritePage } from "./pages/favorite"
import {
  addToFavorites,
  deleteFavorites,
  fetchFavorites,
} from "./pages/favorite/favoritesSlice"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./pages/main/productsSlice"
import { CartPage } from "./pages/cart"
import { loadCart } from "./pages/cart/slices"

function App() {
  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sort, setSort] = useState("")

  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.favorites)

  useEffect(() => {
    dispatch(fetchProducts({ inputName, selectedCategory, sort }))
  }, [inputName, selectedCategory, sort])

  useEffect(() => {
    dispatch(fetchFavorites())
    dispatch(loadCart())
  }, [])

  const handleInput = (text) => {
    setInputName(text)
  }

  const handleChangeCategory = (changedCategory) => {
    if (changedCategory === selectedCategory) {
      setSelectedCategory("")
      return
    }

    setSelectedCategory(changedCategory)
  }

  const handleChangeSort = (order) => {
    if (sort === order) {
      setSort("")
      return
    }

    setSort(order)
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
              onClickFavorites={onClickFavorites}
              sort={sort}
              handleChangeSort={handleChangeSort}
              handleInput={handleInput}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
          }
        />

        <Route path="/favorite" element={<FavoritePage />} />
        <Route
          path="/cart"
          element={<CartPage onClickFavorites={onClickFavorites} />}
        />
      </Routes>
    </div>
  )
}

export default App
