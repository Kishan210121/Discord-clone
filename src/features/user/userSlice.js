import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'Reduxuser',
  initialState: {
    value: null,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setUser: (state, action) => {
      state.value ={...action.payload};
    },
  },
});

export const { increment, decrement, setUser } = slice.actions;
export const selectCount = state => state.Reduxuser.value;

export default slice.reducer;
