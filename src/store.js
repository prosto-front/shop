import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./favoritesSlice"
import productsReducer from "./productsSlice"

export const store = configureStore({
  reducer: { favorites: favoritesReducer, products: productsReducer },
})
