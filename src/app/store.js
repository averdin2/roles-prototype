import { configureStore } from '@reduxjs/toolkit';
import roleReducer from '../features/role/roleSlice';

export const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});
