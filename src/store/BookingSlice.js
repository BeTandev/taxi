import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingList: [],
};

export const getBooking = createAsyncThunk("booking/getBooking", async(payload, thunkAPI) => {
    return payload
})

export const BookingSlice = createSlice({
    name: "bookingList",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBooking.fulfilled, (state, action) => {
            state.bookingList = action.payload
        })
    }
})

export const {} = BookingSlice.actions
export default BookingSlice.reducer