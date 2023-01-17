import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import systemImageReducer from '../features/systemImages/systemImageSlice';
import programsReducer from '../features/programs/programsSlice';
import podcastsReducer from '../features/podcasts/podcastsSlice';
import quotesReducer from '../features/quotes/quotesSlice';
import subscriberlistsReducer from '../features/subscriberslists/subscriberslistsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    systemImage: systemImageReducer,
    programs: programsReducer,
    podcasts: podcastsReducer,
    quotes: quotesReducer,
    subscriberlists: subscriberlistsReducer,
  },
});
