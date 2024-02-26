import { createSlice } from '@reduxjs/toolkit';


type InitialState = {
    loading: boolean;
    value: IApartment[];
}

const initialState: InitialState = {
    loading: true,
    value: []
}

export const apart = createSlice({
    name: 'apart',
    initialState: initialState,
    reducers: {
        addApartement: (state, action) => {
            state.value = [...state.value, action.payload]
        },
    },
})

export const { addApartement } = apart.actions;
export default apart.reducer;