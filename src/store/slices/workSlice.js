import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,

  Workitems: [],
};
export const WorkSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    setItems(state, action) {
      if (action.payload.page === 1) {
        state.Workitems = [...action.payload.data];
        return;
      }
      state.Workitems = [...state.Workitems, ...action.payload.data];
    },

    changeCountPage(state) {
      state.page += 1;
    },
    changePageToDefault(state) {
      state.page = 1;
    },
  },
});

export const { changePageToDefault, changeCountPage, setItems } =
  WorkSlice.actions;
export default WorkSlice.reducer;
