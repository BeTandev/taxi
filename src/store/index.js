import { configureStore } from '@reduxjs/toolkit'
import usernameLoginReducer from './UsernameLoginSlice';

 export const store = configureStore({
  reducer: {
    USERNAMELOGIN: usernameLoginReducer,
  }
});