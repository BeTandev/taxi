import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messageService from "../services/messageService";

const initialState = {
    message: [],
    messageData: []
  };
  
  export const fetchMessage = createAsyncThunk(
    "message/fetchMessage",
    async (payload, thunkAPI) => {
      const response = await messageService.message();
      return response.data;
    }
  );

  
  export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.message = action.payload;
      })
    },
  });
  
  
  export const {} = messageSlice.actions;
  
  export default messageSlice.reducer;
  