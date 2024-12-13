import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";
import {
  addUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "../actions/userActions";
import { toast } from "react-toastify";

//getting todo from localstorage
// const getDataFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("todoItems")) || [];
// };

interface UserState {
  userList: User[];
  isLoading: boolean;
  error: string | null;
  deleteLoading: boolean;
  user: User | null;
  deletedUser: number;
}

const initialState: UserState = {
  userList: [],
  isLoading: false,
  error: null,
  deleteLoading: false,
  user: null,
  deletedUser: 0,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    handleUser(state, action) {
      console.log(action.payload);

      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList = action.payload || [];
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        toast.error("Failed to fetch users");
        state.error = "Failed to fetch users";
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state) => {
        toast.success("user created successfully");
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state) => {
        toast.error("Failed to add user");
        state.error = "Failed to add user";
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        toast.success("user delete successfully");
        state.deleteLoading = false;
        state.userList = state.userList.filter(
          (user) => user.id !== action.payload.id
        );
        state.deletedUser = state.deletedUser + 1;
      })
      .addCase(deleteUser.rejected, (state) => {
        toast.error("Failed to delete user");
        state.error = "Failed to delete user";
        state.deleteLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        toast.success("user updated successfully");
        state.deleteLoading = false;
      })
      .addCase(updateUser.rejected, (state) => {
        toast.error("Failed to update user");
        state.error = "Failed to delete user";
        state.deleteLoading = false;
      });
  },
});

const { reducer } = UserSlice;

export default reducer;
export const { handleUser } = UserSlice.actions;
