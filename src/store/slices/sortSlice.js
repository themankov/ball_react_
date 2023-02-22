import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: '',
  inputValue: '',
  page: 1,
  sort: {
    name: 'популярности ASC',
    sortProperty: 'raiting',
  },
  items: [],
};
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeCategories(state, action) {
      debugger;
      if (action.payload === state.categoryId) {
        state.categoryId = '';
        return;
      }
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setItems(state, action) {
      if (action.payload.page === 1) {
        state.items = [...action.payload.data];
        return;
      }
      state.items = [...state.items, ...action.payload.data];
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    changeCountPage(state) {
      state.page += 1;
    },
    changePageToDefault(state) {
      state.page = 1;
    },
  },
});

export const {
  changeCategories,
  changePageToDefault,
  changeCountPage,
  setItems,
  setSort,
  setInputValue,
} = filterSlice.actions;
export default filterSlice.reducer;
