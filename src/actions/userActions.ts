import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/user";

const BASE_URL = "https://658a4e12ba789a962236e2f6.mockapi.io/user";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const res = await axios.post(BASE_URL, user);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error: "cannot add user" });
    }
  }
);
