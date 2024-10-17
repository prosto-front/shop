import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../types"
import { AppDispatch } from "../../store"

export const fetchFavorites = createAsyncThunk<ProductType[]>(
  "products/fetchFavorites",
  async () => {
    const response = await fetch(`http://localhost:5000/favorites`)
    const result = await response.json()

    return result
  }
)

export const addToFavorites = createAsyncThunk<
  void,
  ProductType,
  { dispatch: AppDispatch }
>("products/addToFavorites", async (product, { dispatch }) => {
  await fetch(`http://localhost:5000/favorites`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  })

  dispatch(fetchFavorites())
})

export const deleteFavorites = createAsyncThunk<
void,
number,
{ dispatch: AppDispatch }
>(
  "products/deleteFavorites",
  async (id, { dispatch }) => {
    await fetch(`http://localhost:5000/favorites/${id}`, {
      method: "DELETE",
    })

    dispatch(fetchFavorites())
  }
)

type InitialStateType = {
  favorites: ProductType[]
}

const initialState: InitialStateType = {
  favorites: [],
}

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
  },
  reducers: {}
})

export default favoritesSlice.reducer
