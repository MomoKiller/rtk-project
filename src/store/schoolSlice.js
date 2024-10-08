import { configureStore, createSlice } from '@reduxjs/toolkit';

const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        name: '',
        address: '',
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        }
    }
});


// stuSlice.actions
export const {setName, setAddress} = schoolSlice.actions;

export const { reducer: schoolReducer } = schoolSlice;