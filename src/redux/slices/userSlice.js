import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,                     
    isAuthenticated: false, 
    token: null,
    loading: false,         
    error: null             
};

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        authStart : (state) => {
            state.loading = true;
            state.error = null;
        },
        authSuccess : (state , action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        setToken : (state , action) => {
            state.token = action.payload;
        },
        logoutSuccess : (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        authFail : (state , action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout : (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        },
        clearError : (state) => {
            state.error = null;
        }
    }
});

export const {
    authStart,
    authSuccess,
    setToken,
    logoutSuccess,
    authFail,
    logout,
    clearError
} = userSlice.actions;

export default userSlice.reducer;