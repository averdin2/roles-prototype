import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = roleSlice.actions;

export default roleSlice.reducer;
