import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type UserType = {
  name: string
  login: string
  phone?: string
  password?: string
  id?: string
}

const getUsers = async (): Promise<UserType[]> => {
  const usersRresult = await fetch(`http://localhost:5000/users`)
  return await usersRresult.json()
}

export const login = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: { message: string } }
>("user/login", async (userForm, { rejectWithValue }) => {
  const users: UserType[] = await getUsers()

  const checkUserLogin = users.find(
    (user) =>
      user.login === userForm.login && user.password === userForm.password
  )

  if (checkUserLogin) {
    return checkUserLogin
  } else {
    return rejectWithValue({ message: "логин или пароль не верен" })
  }
})

export const registration = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: { message: string } }
>("user/registration", async (userForm, { rejectWithValue }) => {
  const users: UserType[] = await getUsers()

  const checkUser = users.some(
    (user) => user.login === userForm.login || user.phone === userForm.phone
  )

  if (checkUser) {
    return rejectWithValue({ message: "уже зарегистрирован" })
  }

  const result = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    body: JSON.stringify(userForm),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const user: UserType = await result.json()

  return user
})

type InitialStateCart = {
  user: UserType | null
  error: null | string
}

const initialState: InitialStateCart = {
  user: null,
  error: null,
}

const registrationSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.error = null
      state.user = action.payload
    })
    builder.addCase(registration.rejected, (state, action) => {
      state.error = action.payload ? action.payload.message : null
    })

    builder.addCase(login.fulfilled, (state, action) => {
      state.error = null
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload ? action.payload.message : null
    })
  },
  reducers: {},
})

export default registrationSlice.reducer
