import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../types/user";
import { RootState } from "../store";

const BASE_URL = "https://658a4e12ba789a962236e2f6.mockapi.io/user";

//fetch all user
export const fetchUsers = createAsyncThunk<User[], { state: RootState }>(
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

//creating new user
export const addUser = createAsyncThunk<any, { state: RootState }>(
  "users/addUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(BASE_URL, user);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error: "cannot add user" });
    }
  }
);

//delete the user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user: User, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}/${user.id}`, user);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error: "cannot update user" });
    }
  }
);

//delete the user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue({ error: "cannot delete user" });
    }
  }
);
