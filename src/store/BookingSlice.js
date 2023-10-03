import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "../services/bookingService";

const initialState = {
  bookingsList: [],
  
};

export const fetchBookings = createAsyncThunk(
    "message/fetchBookings",
    async (payload, thunkAPI) => {
      const response = await bookingService.booking();
      return response.data;
    }
  );

export const BookingSlice = createSlice({
    name: "bookingList",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchBookings.fulfilled, (state, action) => {
            state.bookingsList = action.payload
        })
    }
})

export const {} = BookingSlice.actions
export default BookingSlice.reducer