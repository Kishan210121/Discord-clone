import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "Currentroom",
  initialState: {
    value: {
      RoomId:"12345",
      RoomName:"",
      ownerId:""
    },
  },
  reducers: {
    currentroom: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});

export const { currentroom } = slice.actions;
export const selectRoom = (state) => state.Currentroom.value;

export default slice.reducer;
