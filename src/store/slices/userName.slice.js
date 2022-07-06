import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        setGlobalName: (state, action) => action.payload
    }
})

export const { setGlobalName } = userNameSlice.actions

export default userNameSlice.reducer