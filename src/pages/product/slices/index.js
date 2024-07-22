import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async (id, thunkAPI) => {
    const response = await fetch(`http://localhost:5000/products/${id}`)
    const result = await response.json()

    return result
  }
)

export const loadComments = createAsyncThunk(
  "products/loadComments",
  async (id, thunkAPI) => {
    const result = await fetch(`http://localhost:5000/comments?productId=${id}`)
    const data = await result.json()

    return data
  }
)

export const createComment = createAsyncThunk(
  "products/createComment",
  async (comment, { dispatch }) => {
    await fetch(`http://localhost:5000/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    })

    dispatch(loadComments(comment.productId))
  }
)

const initialState = {
  product: null,
  comments: [],
}

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product = action.payload
    })

    builder.addCase(loadComments.fulfilled, (state, action) => {
      state.comments = action.payload
    })
  },
})

export default productSlice.reducer
