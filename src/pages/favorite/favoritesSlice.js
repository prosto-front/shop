import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchFavorites = createAsyncThunk(
  "products/fetchFavorites",
  async (params, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/favorites`)
    const result = await response.json()

    return result
  }
)

export const addToFavorites = createAsyncThunk(
  "products/addToFavorites",
  async (product, { dispatch }) => {
    await fetch(`http://localhost:5000/favorites`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })

    dispatch(fetchFavorites())
  }
)

export const deleteFavorites = createAsyncThunk(
  "products/deleteFavorites",
  async (id, { dispatch }) => {
    await fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })

    dispatch(fetchFavorites())
  }
)


const initialState = {
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload
    })
  },
})

export default favoritesSlice.reducer
