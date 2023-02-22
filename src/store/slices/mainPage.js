import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Saleitems: [],
  WorkItems: [],
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setSaleItems: (state, action) => {
      state.Saleitems = [...action.payload];
    },
    setWorkItems: (state, action) => {
      state.WorkItems = [...action.payload];
    },
  },
});

export const { setSaleItems, setWorkItems } = mainPageSlice.actions;

export default mainPageSlice.reducer;
