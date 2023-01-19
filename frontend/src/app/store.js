import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import systemImageReducer from '../features/systemImages/systemImageSlice';
import programsReducer from '../features/programs/programsSlice';
import podcastsReducer from '../features/podcasts/podcastsSlice';
import quotesReducer from '../features/quotes/quotesSlice';
import registersReducer from '../features/registers/registersSlice';
import stripeReducer from '../features/stripe/stripeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    systemImage: systemImageReducer,
    programs: programsReducer,
    podcasts: podcastsReducer,
    quotes: quotesReducer,
    registers: registersReducer,
    stripe: stripeReducer,
  },
});
