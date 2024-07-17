import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./pages/favorite/favoritesSlice"
import productsReducer from "./pages/main/productsSlice"

export const store = configureStore({
  reducer: { favorites: favoritesReducer, products: productsReducer },
})
