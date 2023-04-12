import { createSlice } from "@reduxjs/toolkit";

export const guest = createSlice({
    name: 'guest',
    initialState: {
        username: 'Guest',
        connected: false
    },
    reducers: {
        connect: (state, action) => {
            state.connected = true;
            state.username = action.payload;
            return state;
        },

        disconnect: (state) => {
            state.connected = false;
            state.name = 'Guest';
            return state;
        }     
    }
});

export const { connect, disconnect } = guest.actions;