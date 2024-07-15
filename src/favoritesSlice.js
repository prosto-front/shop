import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchFavorites = createAsyncThunk(
  "products/fetchFavorites",
  async (userId, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/favorites`)
    const result = await response.json()

    return result
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
      const dataFromServer = action.payload
      state.favorites = dataFromServer
    })
  },
})

export const { addPost } = favoritesSlice.actions
export default favoritesSlice.reducer
