import { configureStore } from "@reduxjs/toolkit";
import { authSlice as authReducer, profileSlice } from "../features";
import { messageSlice as messageReducer } from "../features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});
