import { configureStore } from '@reduxjs/toolkit'
import usernameLoginReducer from './UsernameLoginSlice';
import messageReducer from './MessageSlice'
import usersReducer from './UsersSlice'

 export const store = configureStore({
  reducer: {
    USERNAMELOGIN: usernameLoginReducer,
    MESSAGES: messageReducer,
    USERS: usersReducer
  }
});