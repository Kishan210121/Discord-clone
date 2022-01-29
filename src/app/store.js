import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: {
    Reduxuser: userSlice,
  },
});
