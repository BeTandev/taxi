import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
    usersList: [],
  };
  
  export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (payload, thunkAPI) => {
      const response = await userService.user();
      return response.data;
    }
  );
  
  export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList = action.payload;
      })
    },
  });
  
  
  export const {} = usersSlice.actions;
  
  export default usersSlice.reducer;