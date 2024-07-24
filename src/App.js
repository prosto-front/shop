import { useEffect, useState } from "react"
import "./App.scss"
import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { FavoritePage } from "./pages/favorite"
import { fetchFavorites } from "./pages/favorite/favoritesSlice"
import { useDispatch } from "react-redux"
import { fetchProducts } from "./pages/main/productsSlice"
import { CartPage } from "./pages/cart"
import { loadCart } from "./pages/cart/slices"
import { Product } from "./pages/product"

function App() {
  const [inputName, setInputName] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)
  const [price, setPrice] = useState({ priceFrom: null, priceTo: null })

  const dispatch = useDispatch()

  useEffect(() => {
    setPage(1)
  }, [inputName, selectedCategory, sort, price])
     
  useEffect(() => {
    dispatch(fetchProducts({ inputName, selectedCategory, sort, price, page }))
  }, [inputName, selectedCategory, sort, price, page])

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

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
            page={page}
              setPrice={setPrice}
              setPage={setPage}
              price={price}
              sort={sort}
              handleChangeSort={handleChangeSort}
              handleInput={handleInput}
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
          }
        />

        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
