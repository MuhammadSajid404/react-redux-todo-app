import { createSlice } from '@reduxjs/toolkit';

const TodoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded: (state, action) => {
      state.push(action.payload);
    },
    
    todoDeleted: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    todoUpdated: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },

    todoCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { todoAdded, todoDeleted, todoUpdated, todoCompleted } = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;
