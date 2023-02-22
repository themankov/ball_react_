import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalSum: 0,
  items: [],
};
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItems(state, action) {
      const findItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalSum = state.items.reduce((acc, item) => {
        return acc + item.Newprice * item.count;
      }, 0);
    },
    removeItem(state, action) {
      state.items.filter((item) => item.id !== action.payload);
    },
    minusItems(state, action) {
      const findItems = state.items.find((item) => item.id === action.payload);
      if (findItems.count === 1) return;
      if (findItems) {
        findItems.count--;
        state.totalSum = state.items.reduce((acc, item) => {
          return acc + item.Newprice * item.count;
        }, 0);
      } else {
        return;
      }
    },
    plusItems(state, action) {
      const findItems = state.items.find((item) => item.id === action.payload);
      if (findItems.count > 99) return;
      if (findItems) {
        findItems.count++;
        state.totalSum = state.items.reduce((acc, item) => {
          return acc + item.Newprice * item.count;
        }, 0);
      } else {
        return;
      }
    },
    clearItems(state, action) {
      state.items = [];
      state.totalSum = 0;
    },
  },
});

export const { addItems, removeItem, clearItems, minusItems, plusItems } =
  cardSlice.actions;
export default cardSlice.reducer;
