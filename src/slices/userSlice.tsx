import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";
import { addUser, fetchUsers } from "../actions/userActions";

//getting todo from localstorage
// const getDataFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem("todoItems")) || [];
// };

interface UserState {
  userList: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userList: [],
  isLoading: false,
  error: null,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList = action.payload || [];
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action);

        state.error = "Failed to fetch users";
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        console.log(action);

        //state.userList = action.payload || [];
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log(action);

        state.error = "Failed to add user";
        state.isLoading = false;
      });
  },
});

const { reducer } = UserSlice;

export default reducer;
export const {} = UserSlice.actions;
