import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
    registered: false
    };

    export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setUsername: (state, action) => {
        state.username = action.payload;
        },
        setEmail: (state, action) => {
        state.email = action.payload;
        },
        setPassword: (state, action) => {
        state.password = action.payload;
        },
        setRegistered: (state) => {
        state.registered = true;
        },
        resetSignup: (state) => {
        state.username = '';
        state.email = '';
        state.password = '';
        state.registered = false;
        }
    }
});

export const { setUsername, setEmail, setPassword, setRegistered, resetSignup } = signupSlice.actions;

export default signupSlice.reducer;