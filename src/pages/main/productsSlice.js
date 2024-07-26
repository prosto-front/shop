import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/products?${params}`)

    const result = await response.json()
    return result
  }
)

const initialState = {
  loading: false,
  products: [],
}

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false

      state.products = action.payload
    })
  },
})

export default productsSlice.reducer
