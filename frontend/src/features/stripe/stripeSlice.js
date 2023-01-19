import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stripeService from './stripeService';

const initialState = {
    stripe: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new stripe
export const createStripe = createAsyncThunk('stripe/create', async (stripeData, thunkAPI) => {
    try {
        const response = await stripeService.createStripe(stripeData);
        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const stripeSlice = createSlice({
    name: 'stripeSlice',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createStripe.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createStripe.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.stripe = action.payload
      })
      .addCase(createStripe.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
  export const {reset} = stripeSlice.actions;
  export default stripeSlice.reducer;