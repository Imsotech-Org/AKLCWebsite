import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quotesService from './quotesService';

const initialState = {
    quotes: [],
    quote: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new quote
export const createQuote = createAsyncThunk('quotes/create', async (quoteData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await quotesService.createQuote(quoteData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete quote
export const deleteQuote = createAsyncThunk('quotes/delete', async (quoteId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await quotesService.deleteQuote(quoteId, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all quotes
export const getQuotes = createAsyncThunk('quotes/getAll', async (_, thunkAPI) => {
    try {
        return await quotesService.getQuotes();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get quote
export const getQuote = createAsyncThunk('quotes/get', async (quoteId, thunkAPI) => {
    try {
        return await quotesService.getQuote(quoteId);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createQuote.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createQuote.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createQuote.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteQuote.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteQuote.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deleteQuote.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getQuotes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.quotes = action.payload
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getQuote.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.quote = action.payload
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
  export const {reset} = quotesSlice.actions;
  export default quotesSlice.reducer;