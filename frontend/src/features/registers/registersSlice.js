import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registersService from './registersService';

const initialState = {
    registers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

// Create new register
export const createRegisters = createAsyncThunk('registers/create', async (registersData, thunkAPI) => {
    try {
        return await registersService.createRegisters(registersData);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete register
export const deleteRegisters = createAsyncThunk('registers/delete', async (registersId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await registersService.deleteRegisters(registersId, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all register
export const getRegisters = createAsyncThunk('registers/getAll', async (_, thunkAPI) => {
    try {
        return await registersService.getRegisters();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const registersSlice = createSlice({
    name: 'registers',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createRegisters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRegisters.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createRegisters.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteRegisters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteRegisters.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deleteRegisters.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRegisters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRegisters.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.registers = action.payload
      })
      .addCase(getRegisters.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
  export const {reset} = registersSlice.actions;
  export default registersSlice.reducer;