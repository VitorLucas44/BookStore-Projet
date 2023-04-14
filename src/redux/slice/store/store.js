import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../bookslice";
import { guest } from "../guest";
import { signupSlice } from '../signupSlice';


export const Store = configureStore({
    reducer:{
        booklist: bookSlice.reducer,
        guest: guest.reducer,
        signup: signupSlice.reducer,
    }
})