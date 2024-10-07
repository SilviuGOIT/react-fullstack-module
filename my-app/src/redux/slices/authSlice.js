import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../pages/common/service/authService";

//initializam userToken din localStorage
const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  isAuth: false,
  status: "idle",
  loading: false,
  email: null,
  userToken,
  error: null,
  success: false,
};

export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  const { data } = await authService.login(payload);
  localStorage.setItem("token", data.accessToken);
  return data;
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const { data } = await authService.register(payload);
    localStorage.setItem("token", data.accessToken);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReduceres: (builder) => {
    //login
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.error = null;
        state.isAuth = true;
        state.userToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
        state.isAuth = false;
      })
      //register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.error = null;
        state.isAuth = true;
        state.email = action.payload.user.email;
        state.userToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
        state.isAuth = false;
      });
  },
});

export const authReducer = authSlice.reducer;
