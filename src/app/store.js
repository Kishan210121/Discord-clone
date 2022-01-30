import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import roomSlice from "../features/Rooms/roomSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore({
  reducer: {
    Reduxuser: userSlice,
    Currentroom: roomSlice,
  },
});
