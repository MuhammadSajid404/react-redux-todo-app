import { configureStore } from '@reduxjs/toolkit';
import { viewFilterReducer } from './ViewSlice';
import { TodoReducer } from './TodoSlice'

export const store = configureStore({
  reducer: {
    TodoReducer: TodoReducer,
    viewFilterReducer: viewFilterReducer,
  },
});
