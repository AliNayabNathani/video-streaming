import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUserThunk } from './userThunk';
import { getUserFromLocalStorage } from '../../utils/localStorage';

// const initialState = {
//     user: null, // Store user information when logged in
//     isAuthenticated: false,
// };

const initialState = {
    msg: "",
    user: "",
    isAuthenticated: false
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        return loginUserThunk('/auth/login', user, thunkAPI);
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, payload) => {
            state.user = localStorage.getItem("user")
        },
        logout: (state, payload) => {
            state.token = null;
            localStorage.clear();
        },
        addToken: (state, payload) => {
            state.token = localStorage.setItem('token', action.payload);
        },
    },
    extraReducers: {
        [loginUser.pending]: (state, { payload }) => {
            state.isAuthenticated = false;
        },
        [loginUser.fulfilled]: (state, { payload: { msg, user } }) => {
            state.msg = msg;
            state.isAuthenticated = true;
            state.user = user;

            localStorage.setItem("user", JSON.stringify(user));
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isAuthenticated = false;
        },
    }
});


export const { addToken, addUser, logout } = userSlice.actions;
export default userSlice.reducer;
