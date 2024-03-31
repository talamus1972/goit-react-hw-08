import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thankAPI) => {
    try {
      const responce = await axios.post("users/signup", userInfo);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thankAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thankAPI) => {
    try {
      const responce = await axios.post("users/login", userInfo);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thankAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thankAPI) => {
  try {
    const responce = await axios.post("users/logout");
    clearAuthHeader();
    return responce.data;
  } catch (error) {
    return thankAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;
      if (savedToken != null) {
        setAuthHeader(savedToken);
        const response = await axios.get("users/current");
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken != null;
    },
  }
);
