import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const signUp = createAsyncThunk('auth/signUp', async (user, thunkAPI) => {
  try {
    return await authService.signUp(user);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const signIn = createAsyncThunk('auth/signIn', async (user, thunkAPI) => {
  try {
    return await authService.signIn(user);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

// log off users
export const signOff = createAsyncThunk('auth/signOff', async () => {
  console.log('signOff from authSlice');
  await authService.signOff();
})

// update User
export const updateMe = createAsyncThunk('auth/update', async (userData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await authService.updateMe(userData, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(signUp.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(signIn.pending, (state) => {
      state.isLoading = true
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(signIn.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(signOff.fulfilled, (state) => {
      state.user = null
    })
    .addCase(updateMe.pending, (state) => {
      state.isLoading = true
    })
    .addCase(updateMe.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(updateMe.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;