import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import podcastService from './podcastsService';

const initialState = {
    podcasts: [],
    podcast: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new podcast
export const createPodcast = createAsyncThunk('podcasts/create', async (podcastData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await podcastService.createPodcast(podcastData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete podcast
export const deletePodcast = createAsyncThunk('podcasts/delete', async (podcastId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await podcastService.deletePodcast(podcastId, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all podcasts
export const getPodcasts = createAsyncThunk('podcasts/getAll', async (_, thunkAPI) => {
    try {
        return await podcastService.getPodcasts();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get podcast
export const getPodcast = createAsyncThunk('podcasts/get', async (podcastId, thunkAPI) => {
    try {
        return await podcastService.getPodcast(podcastId);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const podcastSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createPodcast.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPodcast.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createPodcast.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePodcast.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePodcast.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deletePodcast.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPodcasts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPodcasts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.podcasts = action.payload
      })
      .addCase(getPodcasts.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPodcast.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPodcast.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.podcast = action.payload
      })
      .addCase(getPodcast.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
export const {reset} = podcastSlice.actions;
export default podcastSlice.reducer;