import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

//Get User from localStorage
const user =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("User"))
    : null;

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isAuthenticated: false,
  message: "",
};

//Register the User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err) {
      console.log(err);
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Log in
// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (err) {
//     console.log(err);
//     const message =
//       (err.response && err.response.data && err.response.data.message) ||
//       err.message ||
//       err.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

//Admin Login:
export const adminLogin = createAsyncThunk(
  "auth/login/admin",
  async (user, thunkAPI) => {
    try {
      return await authService.adminlogin(user);
    } catch (err) {
      console.log(err);
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Creator Login
export const creatorLogin = createAsyncThunk(
  "auth/login/creator",
  async (user, thunkAPI) => {
    try {
      return await authService.creatorLogin(user);
    } catch (err) {
      console.log(err);
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//User Login
//Creator Login
export const userLogin = createAsyncThunk(
  "auth/login/user",
  async (user, thunkAPI) => {
    try {
      return await authService.userLogin(user);
    } catch (err) {
      console.log(err);
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (userData, thunkAPI) => {
    try {
      const updatedUser = await authService.updateProfile(userData);
      return updatedUser;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.user = null;
      })
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      })
      .addCase(creatorLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(creatorLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(creatorLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.msg;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = "Profile updated successfully.";
        state.user = action.payload.user;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
