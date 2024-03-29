import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
      state.error=false
      state.loading = true
     })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false
      })
      .addCase(register.rejected, (state) => {
      state.loading = false
      state.error=true
      })
      .addCase(logIn.pending, (state) => {
      state.error=false
      state.loading = true
     })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false
      })
      .addCase(logIn.rejected, (state) => {
      state.loading = false
      state.error=true
      })
      .addCase(logOut.pending, (state) => {
      state.error=false
      state.loading = true
     })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false
      })
     .addCase(logOut.rejected, (state) => {
      state.loading = false
      state.error=true
      }),
});

export default authSlice.reducer;
