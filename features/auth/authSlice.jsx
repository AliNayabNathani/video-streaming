import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService";

//Get User from localStorage
const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('User')) : null;

const initialState = {
    user: user ? user : null,
    isError: false,
    isSucess: false,
    isLoading: false,
    message: '',
}

//Register the User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    }
    catch (err) {
        console.log(err);
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

//Log in
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    }
    catch (err) {
        console.log(err);
        const message = (err.response && err.response.data && err.response.data.message)
            || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
});

export const logout = createAsyncThunk('auth/logout',
    async () => {
        await authService.logout();
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSucess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSucess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSucess = true
                state.user = action.payload.data
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload.data
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
    }
})



export const { reset } = authSlice.actions;

export default authSlice.reducer;