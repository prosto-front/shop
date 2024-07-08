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
  },
})


export const { increment } = counterSlice.actions
export default counterSlice.reducer