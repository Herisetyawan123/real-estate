import { configureStore } from '@reduxjs/toolkit';
import apartReducer from '@/redux/features/apartement-slice';

// store redux
export const store = configureStore({
    reducer: {
        apartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch