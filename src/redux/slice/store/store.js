import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../bookslice";

export const Store = configureStore({
    reducer:{
        booklist: bookSlice.reducer,
    }
})