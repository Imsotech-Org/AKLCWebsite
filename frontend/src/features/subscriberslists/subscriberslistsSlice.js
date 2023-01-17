import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subscriberlistsService from './subscriberslistsService';

const initialState = {
    subscriberlists: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new subscriber
export const createSubscribers = createAsyncThunk('subscriberlists/create', async (subscriberData, thunkAPI) => {
    try {
        return await subscriberlistsService.createSubscribers(subscriberData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete subscriber
export const deleteSubscriber = createAsyncThunk('subscriberlists/delete', async (subId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await subscriberlistsService.deleteSubscriber(subId, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all subscribers
export const getSubscribers = createAsyncThunk('subscriberlists/getAll', async (_, thunkAPI) => {
    try {
        return await subscriberlistsService.getSubscribers();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const subscriberlistsSlice = createSlice({
    name: 'subscriberlists',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createSubscribers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSubscribers.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createSubscribers.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSubscriber.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSubscriber.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deleteSubscriber.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSubscribers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.subscriberlists = action.payload
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
export const {reset} = subscriberlistsSlice.actions;
export default subscriberlistsSlice.reducer;