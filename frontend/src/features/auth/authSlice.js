import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  users: [],
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

// get User
export const getMe = createAsyncThunk('auth/me', async (thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await authService.getMe(token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

// Get all users
export const getAll = createAsyncThunk('auth/getAll', async (_, thunkAPI) => {
  try {
      const token = thunkAPI.getState().auth.user.token;
      return await authService.getAll(token);
  } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
  }
})

// update User
export const forgotMyPassword = createAsyncThunk('auth/forgotPass', async (userData, thunkAPI) => {
  try {
    return await authService.forgotMyPassword(userData);
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
    .addCase(getMe.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(getMe.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
    .addCase(getAll.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getAll.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.users = action.payload
    })
    .addCase(getAll.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.users = []
    })
    .addCase(forgotMyPassword.pending, (state) => {
      state.isLoading = true
    })
    .addCase(forgotMyPassword.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload
      // state.user = action.payload
    })
    .addCase(forgotMyPassword.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;