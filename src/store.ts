import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import checkoutReducer from './features/checkout/checkoutSlice';
import transactionsReducer from './features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    checkout: checkoutReducer,
    transactions: transactionsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
