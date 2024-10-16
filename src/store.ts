import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./pages/favorite/favoritesSlice"
import productsReducer from "./pages/main/productsSlice"
import cartReducer from "./pages/cart/slices"
import productReducer from "./pages/product/slices"

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    products: productsReducer,
    cart: cartReducer,
    product: productReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
