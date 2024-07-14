import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 1,
}

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
