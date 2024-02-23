import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}

type InitialState = {
    value: AuthState;
}

const initialState: InitialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
    }
})

export const { logOut } = auth.actions;
export default auth.reducer;