import { configureStore } from '@reduxjs/toolkit'
import usernameLoginReducer from './UsernameLoginSlice';
import messageReducer from './MessageSlice'

 export const store = configureStore({
  reducer: {
    USERNAMELOGIN: usernameLoginReducer,
    MESSAGES: messageReducer,
  }
});