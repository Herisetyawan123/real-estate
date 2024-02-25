import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/features/auth-slice';
import apartReducer from '@/redux/features/apartement-slice';

// store redux
export const store = configureStore({
    reducer: {
        authReducer,
        apartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch