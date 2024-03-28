import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thankAPI) => {
    try {
      const responce = await axios.post("users/signup", userInfo);
      return responce.data;
    } catch (error) {
      return thankAPI.rejectWithValue(error);
    }
  }
);
