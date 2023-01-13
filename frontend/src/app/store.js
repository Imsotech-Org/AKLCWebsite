import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import systemImageReducer from '../features/systemImages/systemImageSlice';
import programsReducer from '../features/programs/programsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    systemImage: systemImageReducer,
    programs: programsReducer,
  },
});
