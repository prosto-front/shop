import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../../types"
import { AppDispatch } from "../../../store"

export const loadCart = createAsyncThunk<ProductType[]>(
  "products/loadCart",
  async () => {
    const response = await fetch(`http://localhost:5000/cart`)
    const result = await response.json()

    return result
  }
)

export const addToCart = createAsyncThunk<
  void,
  ProductType,
  { dispatch: AppDispatch }
>("products/addToCart", async (product, { dispatch }) => {
  await fetch(`http://localhost:5000/cart`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  })

  dispatch(loadCart())
})

export const deleteFromCart = createAsyncThunk<
  void,
  number,
  { dispatch: AppDispatch }
>("products/deleteFromCart", async (id, { dispatch }) => {
  await fetch(`http://localhost:5000/cart/${id}`, {
    method: "DELETE",
  })

  dispatch(loadCart())
})

export const updateProductCart = createAsyncThunk<void, ProductType>(
  "products/updateProductCart",
  async (updatedProduct, { dispatch }) => {
    await fetch(`http://localhost:5000/cart/${updatedProduct.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })

    dispatch(loadCart())
  }
)

type InitialStateCart = {
  cart: ProductType[]
}

const initialState: InitialStateCart = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cart = action.payload
    })
  },
  reducers: {},
})

export default cartSlice.reducer
