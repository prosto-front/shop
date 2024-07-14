import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import postReducer from "./postSlice"

export const store = configureStore({
  reducer: { counter: counterReducer, posts: postReducer },
})
