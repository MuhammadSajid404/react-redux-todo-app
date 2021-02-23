import { createSlice } from '@reduxjs/toolkit';

export const viewFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

const ViewSlice = createSlice({
  name: 'filter',
  initialState: viewFilters.SHOW_ALL,
  reducers: {
    setViewFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setViewFilter } = ViewSlice.actions;
export const viewFilterReducer = ViewSlice.reducer;
