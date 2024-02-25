import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


type InitialState = {
    loading: boolean;
    value: IApartment[];
}

const initialState: InitialState = {
    loading: true,
    value: []
}

export const fetchApartement = createAsyncThunk('api/apartement', async (thunkApi) => {
    const resp = await fetch('/api/apartement');
    const data = await resp.json();
    return data;
});

export const apart = createSlice({
    name: 'apart',
    initialState: initialState,
    reducers: {
        get: () => {
            
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApartement.fulfilled, (state, action) => {
            state.loading = false;
            state.value.push(...action.payload)
        });

        builder.addCase(fetchApartement.pending, (state, action) => {
            state.loading = true;
        })
    }
})

export const { get } = apart.actions;
export default apart.reducer;