import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import roomSlice from "../features/Rooms/roomSlice";
import ChannelSlice from "../features/Rooms/ChannelSlice";
export const store = configureStore({
  reducer: {
    Reduxuser: userSlice,
    Currentroom: roomSlice,
    CurrentChannel:ChannelSlice,
  },
});
