import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "CurrentChannel",
  initialState: {
    value: {
        ChannelId: "12345",
        ChannelName: ""
    },
  },
  reducers: {
    CurrentChannel: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { CurrentChannel } = slice.actions;
export const selectChannel = (state) => state.CurrentChannel.value;
export default slice.reducer;
