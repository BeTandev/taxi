import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernameLogin: "",
};

export const getUsernameLogin = createAsyncThunk("user/getUsernameLogin",
  async (payload, thunkAPI) => {
    return payload
  }
);

export const usernameLoginSlice = createSlice({
  name: "usernameLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsernameLogin.fulfilled, (state, action) => {
      state.usernameLogin = action.payload;
    });
  },
});

export const {} = usernameLoginSlice.actions;
export default usernameLoginSlice.reducer;
