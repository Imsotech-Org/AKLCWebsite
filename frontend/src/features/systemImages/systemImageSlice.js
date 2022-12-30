import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import systemImageService from './systemImageService';

const initialState = {
  systemImages: [],
  systemImage: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Upload new system image
export const createSystemImage = createAsyncThunk('systemImages/create', async (systemImageData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await systemImageService.createSystemImage(systemImageData, token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

// Get all system images
export const getSystemImages = createAsyncThunk('systemImages/getAll', async (_, thunkAPI) => {
 try {
   return await systemImageService.getSystemImages();
 } catch (error) {
   const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
   return thunkAPI.rejectWithValue(message);
 }
})

// Get system image
export const getSystemImage = createAsyncThunk('systemImages/get', async (imageId, thunkAPI) => {
  try {
    return await systemImageService.getSystemImage(imageId);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
 })

export const systemImageSlice = createSlice({
  name: 'systemImage',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(createSystemImage.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createSystemImage.fulfilled, (state) => {
      state.isLoading = false
      state.isSuccess = true
    })
    .addCase(createSystemImage.rejected, (state, action) => {
      state.isLoading = true
      state.isError = true
      state.message = action.payload
    })
    .addCase(getSystemImages.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getSystemImages.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.systemImages = action.payload
    })
    .addCase(getSystemImages.rejected, (state, action) => {
      state.isLoading = true
      state.isError = true
      state.message = action.payload
    })
    .addCase(getSystemImage.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getSystemImage.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.systemImage = action.payload
    })
    .addCase(getSystemImage.rejected, (state, action) => {
      state.isLoading = true
      state.isError = true
      state.message = action.payload
    })
  }
})

export const {reset} = systemImageSlice.actions;
export default systemImageSlice.reducer;