import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programService from './programsService';

const initialState = {
    programs: [],
    program: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};


// Create new program
export const createProgram = createAsyncThunk('programs/create', async (programsData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await programService.createProgram(programsData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Delete program
export const deleteProgram = createAsyncThunk('programs/delete', async (programId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await programService.deleteProgram(programId, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all programs
export const getPrograms = createAsyncThunk('programs/getAll', async (_, thunkAPI) => {
    try {
        return await programService.getPrograms();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get program
export const getProgram = createAsyncThunk('programs/get', async (programId, thunkAPI) => {
    try {
        return await programService.getProgram(programId);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const programsSlice = createSlice({
    name: 'programs',
    initialState,
    reducers: {
      reset: (state) => initialState
    },
    extraReducers: (builder) => {
      builder.addCase(createProgram.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProgram.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createProgram.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProgram.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProgram.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(deleteProgram.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPrograms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPrograms.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.programs = action.payload
      })
      .addCase(getPrograms.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProgram.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProgram.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.program = action.payload
      })
      .addCase(getProgram.rejected, (state, action) => {
        state.isLoading = true
        state.isError = true
        state.message = action.payload
      })
    }
  })
  
  export const {reset} = programsSlice.actions;
  export default programsSlice.reducer;