import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './slices/mainPage';
import filterReducer from './slices/sortSlice';
import cartReducer from './slices/cartSlice';
import workReducer from './slices/workSlice';
export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    sortPage: filterReducer,
    cartPage: cartReducer,
    workPage: workReducer,
  },
});
window.store = store.getState();
