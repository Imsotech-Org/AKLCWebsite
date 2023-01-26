import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import youtubeVideoService from './youtubeVideosService';

const initialState = {
    youtubeVideos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new youtubeVideo
export const createYoutubeVideo = createAsyncThunk('youtubeVideo/create', async (youtubeData, thunkAPI) => {
    try {
        return await youtubeVideoService.createYoutubeVideo(youtubeData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all youtubeVideos
export const getYoutubeVideos = createAsyncThunk('youtubeVideo/getAll', async (_, thunkAPI) => {
    try {
        return await youtubeVideoService.getYoutubeVideos();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const youtubeVideoSlice = createSlice({
    name: 'youtubeVideo',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createYoutubeVideo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createYoutubeVideo.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createYoutubeVideo.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getYoutubeVideos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getYoutubeVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.youtubeVideos = action.payload
      })
      .addCase(getYoutubeVideos.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
  export const {reset} = youtubeVideoSlice.actions;
  export default youtubeVideoSlice.reducer;