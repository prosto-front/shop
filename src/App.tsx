import { useEffect } from "react"
import "./App.scss"
import { Route, Routes, useSearchParams } from "react-router-dom"
import { Main } from "./pages/main/Main"
import { FavoritePage } from "./pages/favorite"
import { fetchFavorites } from "./pages/favorite/favoritesSlice"
import { useAppDispatch } from "./reduxHooks"
import { fetchProducts } from "./pages/main/productsSlice"
import { CartPage } from "./pages/cart"
import { loadCart } from "./pages/cart/slices"
import { Product } from "./pages/product"
import { Admin } from "./pages/admin"

function App() {
  let [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useAppDispatch()

  const copyParams = new URLSearchParams(searchParams)

  const handleChangeFilters = (key: string, value: string) => {
    if (copyParams.get(key) === value || !value) {
      copyParams.delete(key)
      key === "_order" && copyParams.delete("_sort")
    } else if (key === "_order") {
      copyParams.set("_sort", "price")
      copyParams.set("_order", value)
    } else {
      copyParams.set(key, value)
    }

    if (key !== "_page") {
      copyParams.set("_page", "1")
    }

    setSearchParams(copyParams)
  }

  useEffect(() => {
    if (searchParams) {
      dispatch(fetchProducts(searchParams.toString()))
    }
  }, [searchParams])

  useEffect(() => {
    copyParams.set("_page", "1")
    setSearchParams(copyParams)

    dispatch(fetchFavorites())
    dispatch(loadCart())
  }, [])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchParams={searchParams}
              handleChangeFilters={handleChangeFilters}
            />
          }
        />

        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
