import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {} // data= user detail
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

// export const {} = authSlice.actions
export default authSlice.reducer