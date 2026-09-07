import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, initialState } from "../../../../Types/user_type";

const userSlice = createSlice({
    name: "user",

    initialState,

    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.pending = false;
        },

        clearUser: (state) => {
            state.user = null;
            state.pending = false;
        },

        setPending: (state, action: PayloadAction<boolean>) => {
            state.pending = action.payload;
        },
    },
});

export const {
    setUser,
    clearUser,
    setPending,
} = userSlice.actions;

export default userSlice.reducer;
