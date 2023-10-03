import { configureStore } from '@reduxjs/toolkit'
import usernameLoginReducer from './UsernameLoginSlice';
import messageReducer from './MessageSlice'
import usersReducer from './UsersSlice'
import bookingReducer from './BookingSlice'

 export const store = configureStore({
  reducer: {
    USERNAMELOGIN: usernameLoginReducer,
    MESSAGES: messageReducer,
    USERS: usersReducer,
    BOOKING: bookingReducer
  }
});